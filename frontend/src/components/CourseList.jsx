// src/components/CourseList.jsx
import React, { useEffect, useState } from 'react';
import { getCourses } from '../services/courseService';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        console.log(response)
        setCourses(response);
      } catch (error) {
        console.error("Error fetching courses", error);
      }
    };

    fetchCourses();
  }, []);
  
  // return (
  //   <div>
  //     <h2>Available Courses</h2>
  //     <ul>

  //       {courses && courses.map(course => (
  //         <li key={course.id}>
  //           <Link to={`/courses/${course.id}`}>{course.name}</Link>
  //         </li>
  //       ))}
        
  //     </ul>
  //     <Link className="back-button" to="/home">Back to Home</Link>

  //   </div>
  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses && courses.map((course, index) => (
          <li key={`${course.id}-${index}`}>
            <Link to={`/courses/${course.id}`}>{course.name}
            </Link>
          </li>

        ))}
      </ul>
     <Link className="back-button" to="/home">Back to Home</Link>

    </div>
  );

};

export default CourseList;
