import React from 'react';
import { Navigate } from 'react-router-dom';

// Mock function to check if a user is authenticated (replace with your actual auth logic)
const isAuthenticated = () => {
  // This should check the user's token or login status from localStorage or context
  return localStorage.getItem('token') !== null;
};

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default PrivateRoute;
