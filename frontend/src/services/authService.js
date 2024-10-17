import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust this URL to match your backend

// // Register a new user
// const register = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, userData);
    
//     if (response.data) {
//       // Store the JWT token or user data in localStorage (optional)
//       localStorage.setItem('user', JSON.stringify(response.data));
//     }

//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message || 'Registration failed');
//   }
// };

// Log in a user
const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);

    if (response.data) {
      // Store JWT token or user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};

// Log out a user
const logout = () => {
  // Remove user data from localStorage to log out
  localStorage.removeItem('user');
};

// Get currently logged-in user
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};
