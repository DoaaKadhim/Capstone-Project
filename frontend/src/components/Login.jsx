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
//THIS ONE IT WORK
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Login = () => {
//   const [emailInput, setEmailInput] = useState(''); // State for email input
//   const [passwordInput, setPasswordInput] = useState(''); // State for password input
//   const [errorMessage, setErrorMessage] = useState(''); // State for error messages
//   const navigate = useNavigate(); // Initialize useNavigate for navigation

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const loginData = {
//       email: emailInput,
//       password: passwordInput,
//     };

//     console.log('Login data being sent:', loginData); // Log the data being sent

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', loginData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Login successful:', response.data);
      
//       // Handle successful login (e.g., save token, redirect)
//       const token = response.data.token; // Adjust this based on your API response
//       localStorage.setItem('authToken', token); // Save the token for future use

//       // Redirect to the home page or another route
//       navigate('/home'); // Update this to your desired route

//     } catch (error) {
//       console.error('Error logging in:', error); // Log the error
//       setErrorMessage('Login failed. Please check your credentials and try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={emailInput}
//             onChange={(e) => setEmailInput(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={passwordInput}
//             onChange={(e) => setPasswordInput(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {errorMessage && <p>{errorMessage}</p>} {/* Display error message if exists */}
//     </div>
//   );
// };

// export default Login;
//////////////////////////
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

    console.log('Login data being sent:', loginData); // Log the data being sent

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      console.log('Login successful:', response.data);
      
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
