// import React from 'react';
// import { Navigate } from 'react-router-dom';

// // Mock function to check if a user is authenticated (replace with your actual auth logic)
// const isAuthenticated = () => {
//   // This should check the user's token or login status from localStorage or context
//   return localStorage.getItem('token') !== null;
// };

// function PrivateRoute({ children }) {
//   return isAuthenticated() ? children : <Navigate to="/" />;
// }

// export default PrivateRoute;
// ///////////new 
// import React from 'react';
// import { Navigate } from 'react-router-dom';

// // You might have a way to get the user's authentication status,
// // for example, from context or local storage.
// const isAuthenticated = () => {
//   // Check if the token or user data exists in local storage
//   const token = localStorage.getItem('token');
//   return !!token; // Returns true if token exists, false otherwise
// };

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Check for a token or authentication status
//   return isAuthenticated() ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;
//++++++++++++
// src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Adjust this based on your authentication logic

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
