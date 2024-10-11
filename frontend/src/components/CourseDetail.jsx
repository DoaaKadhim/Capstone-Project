
// src/components/CourseDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById } from '../services/courseService';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the useNavigate hook
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(id);
        setCourse(response);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!course) return <p>Course not found.</p>;

  const handleEnroll = (id) => {
    console.log(id)
    navigate(`/enroll/${id}`); // Navigate to EnrollPage
  };
console.log(course)
  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Syllabus:</strong> {course.syllabus}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <button onClick={()=>handleEnroll(course.id)}>Enroll</button>
    </div>
  );
};

export default CourseDetail;
