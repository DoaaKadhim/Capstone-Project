
// src/components/CourseDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate , Link } from 'react-router-dom';
import { getCourseById } from '../services/courseService';

const CourseDetail = () => {
  const { id } = useParams();// Get course ID from the URL parameters
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [course, setCourse] = useState(null);// State to store course data
  const [loading, setLoading] = useState(true);// Loading state

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(id);// Fetch course data
        setCourse(response);// Set course data into state
      } catch (error) {
        console.error('Error fetching course:', error);// Handle errors
      } finally {
        setLoading(false);// End loading state after fetching
      }
    };

    fetchCourse();// Trigger fetching when component mounts
  }, [id]);// Re-run effect when the ID changes

  if (loading) return <p>Loading...</p>;// Show loading message if data is still being fetched

  if (!course) return <p>Course not found.</p>;// Show error if no course is found

  const handleEnroll = (id) => {
    navigate(`/enroll/${id}`); // Navigate to EnrollPage
  };

  return (
    <div>
    <h2>{course.title}</h2> {/* Show course title */}
    <p><strong>Syllabus:</strong> {course.syllabus}</p> {/* Show course syllabus */}
    <p><strong>Instructor:</strong> {course.instructor}</p> {/* Show course instructor */}
    <button className="enroll-btn" onClick={()=> handleEnroll(course.id)}>Enroll</button> {/* Enroll button */}
    <Link className="back-button" to="/courses">Back To All Courses</Link> {/* Link to courses list */}
    </div>
    
  );
};

export default CourseDetail;
