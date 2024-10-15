
// src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Adjust this based on your authentication logic

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
