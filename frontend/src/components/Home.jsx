
/////==========================

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure to import your CSS

const Home = () => {
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

        <Link to="/course-overview">
        <button className="home-button">Courses Overview</button>
      </Link>

          {/* <h2>Courses Overview</h2> */}
          <p>Explore your enrolled courses and keep track of your progress.</p>
        </div>

        <div className="home-card">
        <Link to="/quiz-result">
        <button className="home-button">Quiz Results</button>
      </Link>
          <p>Check your quiz results and monitor your performance.</p>
        </div>

        <div className="home-card">
          {/* <h2>Virtual Classes</h2> */}
          <Link to="/virtual-classes">
        <button className="home-button">Virtual Classes</button>
          </Link>
          <p>Attend live virtual classes and manage your class schedule.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
