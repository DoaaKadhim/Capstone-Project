
//////try new 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Ensure Link is imported

const Login = () => {
  const [emailInput, setEmailInput] = useState(''); // State for email input
  const [passwordInput, setPasswordInput] = useState(''); // State for password input
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email: emailInput,  // Use emailInput state for email
      password: passwordInput,  // Use passwordInput state for password
    };

    console.log('Login data being sent:', loginData); // Log the data being sent

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData); // Send loginData object
      console.log('Login successful:', response);
      
      // Handle successful login: save token and redirect to home
      localStorage.setItem('token', response.data.token); // Assuming you get a token
      navigate('/home'); // Redirect to home
    } catch (error) {
      console.error('Error logging in', error); // Log the error
      setErrorMessage('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>} {/* Display error message if exists */}
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default Login;
