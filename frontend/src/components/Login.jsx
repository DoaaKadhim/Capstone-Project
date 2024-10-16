
//try to add logout
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [emailInput, setEmailInput] = useState(''); // State for email input
  const [passwordInput, setPasswordInput] = useState(''); // State for password input
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email: emailInput,
      password: passwordInput,
    };

    console.log('Login data being sent:', loginData);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      console.log('Login successful:', response);

      // Handle successful login: save token and redirect to home
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId); // Optionally store userId if sent
      navigate('/home');
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.msg || 'Login failed.');
      } else {
        setErrorMessage('Login failed. Please try again later.');
      }
      console.error('Error logging in', error);
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
    </div>
  );
};

export default Login;
