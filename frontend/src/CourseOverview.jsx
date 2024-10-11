
// src/components/CourseOverview.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from './services/courseService';

const CourseOverview = () => {
  const { courseId } = useParams();  // Get the courseId from the URL
  const [course, setCourse] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await getCourseById(courseId); // Fetch course details by ID
        setCourse(response.data);
      } catch (err) {
        setError('Course not found');
        console.error('Error fetching course details:', err);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Add other course details here if needed */}
      <Link to="/courses">Back to Courses</Link>
    </div>
  );
};

export default CourseOverview;
