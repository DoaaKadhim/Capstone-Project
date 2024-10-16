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
// /////////logout
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../App.css'; // Import the CSS for the homepage styling

// const Home = () => {
//   const navigate = useNavigate(); // Using the navigate hook to programmatically redirect

//   const handleLogout = () => {
//     // Clear token from localStorage or any session data
//     localStorage.removeItem('token'); 

//     // Optionally, show a message to confirm the logout
//     alert('You have successfully logged out.');

//     // Redirect the user to the Logout Confirmation page after logout
//     navigate('/logout-confirmation');
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
/////==========================

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Make sure to import your CSS

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="home-header">
//         <h1>Welcome to Our Dashboard</h1>
//         <p>Your one-stop solution to manage your courses, quizzes, and virtual classes</p>
//       </div>

//       <Link to="/dashboard">
//         <button className="home-button">Go to Dashboard</button>
//       </Link>

//       <div className="card-container">
//         <div className="home-card">

//         <Link to="/course">
//         <button className="home-button">Courses Overview</button>
//       </Link>

//           {/* <h2>Courses Overview</h2> */}
//           <p>Explore your enrolled courses and keep track of your progress.</p>
//         </div>

//         <div className="home-card">
//         <Link to="/quiz-result">
//         <button className="home-button">Quiz Results</button>
//       </Link>
//           <p>Check your quiz results and monitor your performance.</p>
//         </div>

//         <div className="home-card">
//           {/* <h2>Virtual Classes</h2> */}
//           <Link to="/virtual-classes">
//         <button className="home-button">Virtual Classes </button>
//       </Link>
//           <p>Attend live virtual classes and manage your class schedule.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
////try to change the course over view 
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure to import your CSS

const Home = () => {
  // Sample resources data
  const resources = [
    { id: 1, title: "React Development", url: "https://reactjs.org/docs/getting-started.html" },
    { id: 2, title: "JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { id: 3, title: "CSS Mastery", url: "https://css-tricks.com/" },
  ];
// Function to handle logout
const handleLogout = () => {
  localStorage.removeItem('token'); // Remove the token from localStorage
  navigate('/login'); // Redirect to the login page
};
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Our Dashboard</h1>
        <p>Your one-stop solution to manage your courses, quizzes, and virtual classes</p>
      </div>

      <Link to="/dashboard">
        <button className="home-button">Go to Dashboard</button>
      </Link>

     
      <div className="card-container">
        <div className="home-card">
          <Link to="/learning-resources">
            <button className="home-button">Learning Resources</button>
          </Link>
          <p>Explore essential resources for React, JavaScript, and CSS to enhance your skills.</p>
        </div>

        <div className="home-card">
          <Link to="/quiz-result">
            <button className="home-button">Quiz Results</button>
          </Link>
          <p>Check your quiz results and monitor your performance.</p>
        </div>

        <div className="home-card">
          <Link to="/virtual-classes">
            <button className="home-button">Virtual Classes</button>
          </Link>
          
          <p>Attend live virtual classes and manage your class schedule.</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button> 

      </div>
    </div>
  );
};

export default Home;
// // ///////try to add login and logout button
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../App.css'; // Make sure to import your CSS

// const Home = () => {
//   const navigate = useNavigate();

//   // Check if the user is logged in by verifying if a token exists in localStorage
//   const isLoggedIn = !!localStorage.getItem('token');

//   // Handle login redirection
//   const handleLogin = () => {
//     navigate('/login'); // Redirect to the login page
//   };

//   // Handle logout by clearing token and redirecting to login page
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from localStorage
//     localStorage.removeItem('userId'); // Remove user data if stored
//     navigate('/login'); // Redirect to login page
//   };

//   // Sample resources data
//   const resources = [
//     { id: 1, title: "React Development", url: "https://reactjs.org/docs/getting-started.html" },
//     { id: 2, title: "JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
//     { id: 3, title: "CSS Mastery", url: "https://css-tricks.com/" },
//   ];

//   return (
//     <div className="home-container">
//       <div className="home-header">
//         <h1>Welcome to Our Dashboard</h1>
//         <p>Your one-stop solution to manage your courses, quizzes, and virtual classes</p>
//       </div>

//       {/* Conditional rendering for Login/Logout buttons */}
//       <div className="auth-buttons">
//         {isLoggedIn ? (
//           <button className="home-button" onClick={handleLogout}>Logout</button> // Show Logout button if logged in
//         ) : (
//           <button className="home-button" onClick={handleLogin}>Login</button> // Show Login button if not logged in
//         )}
//       </div>

//       <Link to="/dashboard">
//         <button className="home-button">Go to Dashboard</button>
//       </Link>

//       <div className="card-container">
//         <div className="home-card">
//           <Link to="/learning-resources">
//             <button className="home-button">Learning Resources</button>
//           </Link>
//           <p>Explore essential resources for React, JavaScript, and CSS to enhance your skills.</p>
//         </div>

//         <div className="home-card">
//           <Link to="/quiz-result">
//             <button className="home-button">Quiz Results</button>
//           </Link>
//           <p>Check your quiz results and monitor your performance.</p>
//         </div>

//         <div className="home-card">
//           <Link to="/virtual-classes">
//             <button className="home-button">Virtual Classes</button>
//           </Link>
//           <p>Attend live virtual classes and manage your class schedule.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

