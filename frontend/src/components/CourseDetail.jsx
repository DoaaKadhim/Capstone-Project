// //the above one work
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getCourseById } from '../services/courseService';

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true); // State for loading

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const response = await getCourseById(id);
//         setCourse(response.data);
//       } catch (error) {
//         console.error('Error fetching course:', error);
//       } finally {
//         setLoading(false); // Stop loading regardless of success or failure
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   if (loading) return <p>Loading...</p>; // Show loading message

//   if (!course) return <p>Course not found.</p>; // Handle case when course is not found

//   return (
//     <div>
//       <h2>{course.title}</h2>
//       <p><strong>Syllabus:</strong> {course.syllabus}</p>
//       <p><strong>Instructor:</strong> {course.instructor}</p>
//       <button onClick={() => handleEnroll(course.id)}>Enroll</button>
//     </div>
//   );
// };

// // Dummy function to handle enrollment
// const handleEnroll = (courseId) => {
//   alert(`Enrolled in course with ID: ${courseId}`);
// };

// export default CourseDetail;
///////////try new one
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getCourseById } from '../services/courseService';

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const response = await getCourseById(id);
//         console.log('Fetched Course:', response.data); // Log response
//         setCourse(response.data);
//       } catch (error) {
//         console.error('Error fetching course:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!course) return <p>Course not found.</p>;

//   return (
//     <div>
//       <h2>{course.title}</h2>
//       <p><strong>Syllabus:</strong> {course.syllabus}</p>
//       <p><strong>Instructor:</strong> {course.instructor}</p>
//       <button onClick={() => handleEnroll(course.id)}>Enroll</button>
//     </div>
//   );
// };

// const handleEnroll = (courseId) => {
//   alert(`Enrolled in course with ID: ${courseId}`);
// };

// export default CourseDetail;
// //the above work 

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

  const handleEnroll = () => {
    navigate(`/enroll/${course._id}`); // Navigate to EnrollPage
  };

  return (
    <div>
    <h2>{course.title}</h2> {/* Show course title */}
    <p><strong>Syllabus:</strong> {course.syllabus}</p> {/* Show course syllabus */}
    <p><strong>Instructor:</strong> {course.instructor}</p> {/* Show course instructor */}
    <button className="enroll-btn" onClick={handleEnroll}>Enroll</button> {/* Enroll button */}
    <Link className="back-button" to="/courses">Back To All Courses</Link> {/* Link to courses list */}
    </div>
    
  );
};

export default CourseDetail;
