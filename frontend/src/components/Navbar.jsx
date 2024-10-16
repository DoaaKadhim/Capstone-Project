import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    localStorage.removeItem('userId'); // Remove user data if you have stored it
    navigate('/login'); // Redirect to the login page
  };

  return (
    <nav>
      <h1>My App</h1>
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
    </nav>
  );
};

export default Navbar;
