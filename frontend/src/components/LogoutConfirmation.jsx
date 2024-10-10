// src/components/LogoutConfirmation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Use the same CSS styling or create new ones

const LogoutConfirmation = () => {
  return (
    <div className="logout-confirmation-container">
      <h1>You've Successfully Logged Out!</h1>
      <p>Thank you for visiting our platform. We hope to see you again soon!</p>
      <Link to="/login" className="login-link">
        <button className="login-again-button">Log In Again</button>
      </Link>
    </div>
  );
};

export default LogoutConfirmation;
