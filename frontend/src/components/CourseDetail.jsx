//the above one work
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../services/courseService';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(id);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p>Loading...</p>; // Show loading message

  if (!course) return <p>Course not found.</p>; // Handle case when course is not found

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Syllabus:</strong> {course.syllabus}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <button onClick={() => handleEnroll(course.id)}>Enroll</button>
    </div>
  );
};

// Dummy function to handle enrollment
const handleEnroll = (courseId) => {
  alert(`Enrolled in course with ID: ${courseId}`);
};

export default CourseDetail;
