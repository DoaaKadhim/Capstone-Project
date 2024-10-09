// import React, { useState } from 'react';
// import axios from '../utils/axiosConfig'; // Custom axios instance

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/auth/login', { email, password });
//       localStorage.setItem('token', res.data.token); // Store token
//       // Redirect to dashboard
//       window.location.href = '/dashboard';
//     } catch (error) {
//       console.error('Error logging in', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
////////////new

// src/components/Login.jsx
// src/components/Login.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [emailInput, setEmailInput] = useState(''); // State for email input
  const [passwordInput, setPasswordInput] = useState(''); // State for password input
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email: emailInput,
      password: passwordInput,
    };

    console.log('Login data being sent:', loginData); // Log the data being sent

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., save token, redirect)
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
    </div>
  );
};

export default Login;
