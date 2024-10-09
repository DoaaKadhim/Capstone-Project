// src/components/VirtualClassroom.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const VirtualClassroom = () => {
  return (
    <div>
      <h2>Virtual Classroom</h2>
      {/* Integrate video streaming service or classroom features */}
      <button>Join Class</button>

      {/* Link to navigate back to the home page */}
      <Link to="/home" className="back-to-home">Back to Home</Link>
    </div>
  );
};

export default VirtualClassroom;
