
/////////try logout button
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; // Make sure to import your CSS

const Home = () => {
  // Sample resources data
  const resources = [
    { id: 1, title: "React Development", url: "https://reactjs.org/docs/getting-started.html" },
    { id: 2, title: "JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { id: 3, title: "CSS Mastery", url: "https://css-tricks.com/" },
  ];

  const navigate = useNavigate(); // Create navigate function

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Our Dashboard</h1>
        <p>Your one-stop solution to manage your courses, quizzes, and virtual classes</p>
      </div>

      <Link to="/dashboard">
        <button className="home-button">Go to Dashboard</button>
      </Link>

      <div className="card-container">
        <div className="home-card">
          <Link to="/learning-resources">
            <button className="home-button">Learning Resources</button>
          </Link>
          <p>Explore essential resources for React, JavaScript, and CSS to enhance your skills.</p>
        </div>

        <div className="home-card">
          <Link to="/quiz-result">
            <button className="home-button">Quiz Results</button>
          </Link>
          <p>Check your quiz results and monitor your performance.</p>
        </div>

        <div className="home-card">
          <Link to="/virtual-classes">
            <button className="home-button">Virtual Classes</button>
          </Link>
          <p>Attend live virtual classes and manage your class schedule.</p>
        </div>
        
        {/* Logout Button */}
        <button className="logout-button" onClick={handleLogout}>Logout</button> 
      </div>
    </div>
  );
};

export default Home;
