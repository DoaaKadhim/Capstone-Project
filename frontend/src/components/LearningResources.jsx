// src/components/LearningResources.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Use useNavigate instead of useHistory

const LearningResources = () => {
  const navigate = useNavigate(); // Hook to access the navigate function

  // Define your courses and resources
  const courses = [
    { id: 1, title: "React Development", url: "https://reactjs.org/docs/getting-started.html" },
    { id: 2, title: "JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { id: 3, title: "CSS Mastery", url: "https://css-tricks.com/" },
  ];

  return (
    <div className="resources-container">
      <h1>Learning Resources</h1>
      <p>Enhance your skills with these valuable resources:</p>
      
      <h2>Your Courses:</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <a href={course.url} target="_blank" rel="noopener noreferrer">
              {course.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Go Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>

      {/* Link to All Courses */}
      <Link className="back-button" to="/courses">
        Back To All Courses
      </Link>
    </div>
  );
};

export default LearningResources;
