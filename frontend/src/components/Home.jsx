// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    window.location.href = '/login'; // Redirect to login
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/virtual-classroom">Virtual Classroom</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
