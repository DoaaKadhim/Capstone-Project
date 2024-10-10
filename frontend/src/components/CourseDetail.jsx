// src/components/CourseDetail.jsx// src/components/CourseDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../services/courseService';

const CourseDetail = () => {
  const { courseId } = useParams(); // Corrected to use courseId
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(courseId);
        setCourse(response.data); // Set the course data
      } catch (err) {
        setError("Failed to load course details."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; // Display error message

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <p>Syllabus: {course.syllabus}</p>
      <p>Instructor: {course.instructor}</p>
      <button>Enroll</button>
    </div>
  );
};

export default CourseDetail;
