// // src/components/Home.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear token
//     window.location.href = '/login'; // Redirect to login
//   };

//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//       <nav>
//         <ul>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/courses">Courses</Link></li>
//           <li><Link to="/quiz">Quiz</Link></li>
//           <li><Link to="/virtual-classroom">Virtual Classroom</Link></li>
//         </ul>
//       </nav>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Home;
//////////The above one its work 

///new one
// src/components/Home.jsximport React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../App.css'; // Import the CSS for the homepage styling

// const Home = () => {
//   const navigate = useNavigate(); // Using the navigate hook to programmatically redirect

//   const handleLogout = () => {
//     // Clear token from localStorage or any session data
//     localStorage.removeItem('token'); 

//     // Optionally, show a message to confirm the logout
//     alert('You have successfully logged out.');

//     // Redirect the user to the login page after logout
//     navigate('/login');
//   };

//   return (
//     <div className="home-container">
//       <header className="home-header">
//         <h1>Welcome to Our Learning Platform!</h1>
//         <p>Discover courses, join classes, and take quizzes all in one place.</p>
//       </header>

//       <nav className="home-navigation">
//         <ul>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/courses">Courses</Link></li>
//           <li><Link to="/quiz">Quiz</Link></li>
//           <li><Link to="/virtual-classroom">Virtual Classroom</Link></li>
//         </ul>
//       </nav>

//       <button className="logout-button" onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Home;
/////////logout
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS for the homepage styling

const Home = () => {
  const navigate = useNavigate(); // Using the navigate hook to programmatically redirect

  const handleLogout = () => {
    // Clear token from localStorage or any session data
    localStorage.removeItem('token'); 

    // Optionally, show a message to confirm the logout
    alert('You have successfully logged out.');

    // Redirect the user to the Logout Confirmation page after logout
    navigate('/logout-confirmation');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Learning Platform!</h1>
        <p>Discover courses, join classes, and take quizzes all in one place.</p>
      </header>

      <nav className="home-navigation">
        <ul>
          
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/virtual-classroom">Virtual Classroom</Link></li>
        </ul>
      </nav>

      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
