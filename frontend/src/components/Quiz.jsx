// src/components/Quiz.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Quiz = () => {
  // Handle quiz logic here
  return (
    <div>
      <h2>Quiz Title</h2>
      {/* Quiz questions and answers go here */}
      <button>Submit</button>

      {/* Link to navigate back to the home page */}
      <Link to="/home" className="back-to-home">Back to Home</Link>
    </div>
  );
};

export default Quiz;
