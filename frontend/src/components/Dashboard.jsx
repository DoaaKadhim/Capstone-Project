// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Import your CSS for styling
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Dashboard = ({ studentId }) => {
//   const location = useLocation();
//   const [enrolledCoursesCount, setEnrolledCoursesCount] = useState(0);
//   const [completedQuizzesCount, setCompletedQuizzesCount] = useState(0); // Assuming you want to track completed quizzes
//   const [upcomingClassesCount, setUpcomingClassesCount] = useState(0); // Assuming you want to track upcoming classes
// useEffect(()=>{

// },[]
// )
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         // Fetch enrolled courses count from your API
//         const response = await axios.get(`/api/students/${studentId}/enrolledCourses`);
//         setEnrolledCoursesCount(response.data.length);

//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     fetchDashboardData();
//   }, [studentId]); // Ensure to fetch data whenever the studentId changes

//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       <div className="dashboard-content">
//         <section className="dashboard-summary">
//           <h2>Summary</h2>
//           <p>Welcome back! Here’s an overview of your current progress.</p>
//           <ul>
//             <li>Courses Enrolled: {enrolledCoursesCount}</li>
//             <li>Completed Quizzes: {completedQuizzesCount}</li>
//             <li>Upcoming Classes: {upcomingClassesCount}</li>
//           </ul>
//         </section>

//         <section className="dashboard-links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li><Link to="/courses">View Courses</Link></li>
//             <li><Link to="/quiz">Take Quiz</Link></li>
//             <li><Link to="/virtual-classroom">Join Virtual Classroom</Link></li>
//             {/* <li><Link to="/course-overview">Course Overview</Link></li> Added link to course overview */}
//           </ul>
//         </section>

//         <section className="dashboard-notifications">
//           <h2>Notifications</h2>
//           <p>You have 2 new messages.</p>
//           <p>Your next class starts in 1 hour!</p>
//         </section>
//       </div>
//       <Link to="/" className="back-button">Back to Home</Link>
//     </div>
//   );
// };

// export default Dashboard;
///////try 

// import React, { useState, useEffect } from 'react';

// const Dashboard = ({ studentId }) => {
//   // State to hold the number of enrolled courses, quizzes, and classes
//   const [enrolledCourses, setEnrolledCourses] = useState(0);
//   const [completedQuizzes, setCompletedQuizzes] = useState(0);
//   const [upcomingClasses, setUpcomingClasses] = useState(0);

//   useEffect(() => {
//     // Fetch student-related data (you can fetch from API, localStorage, etc.)
//     const fetchStudentData = () => {
//       // For example, get the data from localStorage (replace with your API call if needed)
//       const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || 0;
//       const quizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || 0;
//       const classes = JSON.parse(localStorage.getItem('upcomingClasses')) || 0;

//       // Update the state with the fetched data
//       setEnrolledCourses(courses);
//       setCompletedQuizzes(quizzes);
//       setUpcomingClasses(classes);
//     };

//     fetchStudentData();
//   }, []); // Empty array ensures this only runs on component mount

//   // Function to simulate enrolling in a course (this could be tied to your enroll button)
//   const handleEnroll = () => {
//     const newCount = enrolledCourses + 1;
//     setEnrolledCourses(newCount);
//     localStorage.setItem('enrolledCourses', JSON.stringify(newCount)); // Save it to localStorage
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>Courses Enrolled: {enrolledCourses}</p>
//       <p>Completed Quizzes: {completedQuizzes}</p>
//       <p>Upcoming Classes: {upcomingClasses}</p>

//       {/* Button to enroll in a course */}
//       <button onClick={handleEnroll}>Enroll in Course</button>
//     </div>
//   );
// };
// export default Dashboard;
//================================
// // src/Dashboard.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Import your CSS for styling

// const Dashboard = () => {
//   // State to hold the number of enrolled courses, quizzes, and classes
//   const [enrolledCourses, setEnrolledCourses] = useState(0);
//   const [completedQuizzes, setCompletedQuizzes] = useState(0);
//   const [upcomingClasses, setUpcomingClasses] = useState(0);

//   useEffect(() => {
//     // Fetch student-related data (from localStorage)
//     const fetchStudentData = () => {
//       const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || 0;
//       const quizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || 0;
//       const classes = JSON.parse(localStorage.getItem('upcomingClasses')) || 0;

//       setEnrolledCourses(courses);
//       setCompletedQuizzes(quizzes);
//       setUpcomingClasses(classes);
//     };

//     fetchStudentData();
//   }, []); // Only run on component mount

//   // Function to simulate enrolling in a course (this could be tied to your enroll button)
//   const handleEnroll = () => {
//     const newCount = enrolledCourses + 1;
//     setEnrolledCourses(newCount);
//     localStorage.setItem('enrolledCourses', JSON.stringify(newCount)); // Save to localStorage
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       <div className="dashboard-content">
//         <section className="dashboard-summary">
//           <h2>Summary</h2>
//           <p>Welcome back! Here’s an overview of your current progress.</p>
//           <ul>
//             <li>Courses Enrolled: {enrolledCourses}</li>
//             <li>Completed Quizzes: {completedQuizzes}</li>
//             <li>Upcoming Classes: {upcomingClasses}</li>
//           </ul>
//         </section>

//         <section className="dashboard-links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li><Link to="/courses">View Courses</Link></li>
//             <li><Link to="/quiz">Take Quiz</Link></li>
//             <li><Link to="/virtual-classroom">Join Virtual Classroom</Link></li>
//           </ul>
//         </section>

//         <section className="dashboard-notifications">
//           <h2>Notifications</h2>
//           <p>You have 2 new messages.</p>
//           <p>Your next class starts in 1 hour!</p>
//         </section>

//         {/* Button to enroll in a new course */}
//         {/* <button onClick={handleEnroll}>Enroll in Course</button> */}
//       </div>

//       {/* Link to go back to the home page */}
//       <Link to="/" className="back-button">Back to Home</Link>
//     </div>
//   );
// };

// export default Dashboard;
// ////////////try the new one for quiz
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Import your CSS for styling

// const Dashboard = () => {

//   const [enrolledCourses, setEnrolledCourses] = useState(0);
//   const [completedQuizzes, setCompletedQuizzes] = useState(0);
//   const [upcomingClasses, setUpcomingClasses] = useState(0);

//   // Function to fetch the latest data from localStorage
//   const fetchStudentData = () => {
//     const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || 0;
//     const quizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || 0;
//     const classes = JSON.parse(localStorage.getItem('upcomingClasses')) || 0;

//     setEnrolledCourses(courses);
//     setCompletedQuizzes(quizzes);
//     setUpcomingClasses(classes);
//   };

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetchStudentData();

//     // Set up an event listener to listen for changes in localStorage
//     const handleStorageChange = () => {
//       fetchStudentData();
//     };

//     // Add event listener for storage change
//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       // Clean up event listener when the component unmounts
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       <div className="dashboard-content">
//         <section className="dashboard-summary">
//           <h2>Summary</h2>
//           <p>Welcome back! Here’s an overview of your current progress.</p>
//           <ul>
//             <li>Courses Enrolled: {enrolledCourses}</li>
//             <li>Completed Quizzes: {completedQuizzes}</li>
//             <li>Upcoming Classes: {upcomingClasses}</li>
//           </ul>
//         </section>

//         <section className="dashboard-links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li><Link to="/courses">View Courses</Link></li>
//             <li><Link to="/quiz">Take Quiz</Link></li>
//             <li><Link to="/virtual-classroom">Join Virtual Classroom</Link></li>
//           </ul>
//         </section>

//         <section className="dashboard-notifications">
//           <h2>Notifications</h2>
//           <p>You have 2 new messages.</p>
//           <p>Your next class starts in 1 hour!</p>
//         </section>

//         {/* Link to go back to the home page */}
//         <Link to="/" className="back-button">Back to Home</Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
/////////////////////////////
//try new opton pending assignment 

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Import your CSS for styling

// const Dashboard = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState(0);
//   const [completedQuizzes, setCompletedQuizzes] = useState(0);
//   const [pendingAssignments, setPendingAssignments] = useState(0); // Updated state variable

//   // Function to fetch the latest data from localStorage
//   const fetchStudentData = () => {
//     const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || 0;
//     const quizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || 0;
//     const assignments = JSON.parse(localStorage.getItem('pendingAssignments')) || 0; // Fetch pending assignments

//     setEnrolledCourses(courses);
//     setCompletedQuizzes(quizzes);
//     setPendingAssignments(assignments); // Update pending assignments state
//   };

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetchStudentData();

//     // Set up an event listener to listen for changes in localStorage
//     const handleStorageChange = () => {
//       fetchStudentData();
//     };

//     // Add event listener for storage change
//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       // Clean up event listener when the component unmounts
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       <div className="dashboard-content">
//         <section className="dashboard-summary">
//           <h2>Summary</h2>
//           <p>Welcome back! Here’s an overview of your current progress.</p>
//           <ul>
//             <li>Courses Enrolled: {enrolledCourses}</li>
//             <li>Completed Quizzes: {completedQuizzes}</li>
//             <li>Pending Assignments: {pendingAssignments}</li> {/* Updated option */}
//           </ul>
//         </section>

//         <section className="dashboard-links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li><Link to="/courses">View Courses</Link></li>
//             <li><Link to="/quiz">Take Quiz</Link></li>
//             <li><Link to="/virtual-classroom">Join Virtual Classroom</Link></li>
//           </ul>
//         </section>

//         <section className="dashboard-notifications">
//           <h2>Notifications</h2>
//           <p>You have 2 new messages.</p>
//           <p>Your next class starts in 1 hour!</p>
//         </section>

//         {/* Link to go back to the home page */}
//         <Link to="/" className="back-button">Back to Home</Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
/////////////////////////////////////////
///////try to add pending assignment
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your CSS for styling

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [pendingAssignments, setPendingAssignments] = useState(0); // Updated state variable

  // Function to fetch the latest data from localStorage
  const fetchStudentData = () => {
    const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || 0;
    const quizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || 0;
    const assignments = JSON.parse(localStorage.getItem('pendingAssignments')) || 0; // Fetch pending assignments

    setEnrolledCourses(courses);
    setCompletedQuizzes(quizzes);
    setPendingAssignments(assignments); // Update pending assignments state
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchStudentData();

    // Set up an event listener to listen for changes in localStorage
    const handleStorageChange = () => {
      fetchStudentData();
    };

    // Add event listener for storage change
    window.addEventListener('storage', handleStorageChange);

    return () => {
      // Clean up event listener when the component unmounts
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Function to complete an assignment
  const completeAssignment = () => {
    const currentAssignments = JSON.parse(localStorage.getItem('pendingAssignments')) || 0;
    if (currentAssignments > 0) {
      const updatedAssignments = currentAssignments - 1;
      localStorage.setItem('pendingAssignments', JSON.stringify(updatedAssignments));
      fetchStudentData(); // Fetch updated data after completion
    }
  };

  // Function to add an assignment
  const addAssignment = () => {
    const currentAssignments = JSON.parse(localStorage.getItem('pendingAssignments')) || 0;
    const updatedAssignments = currentAssignments + 1;
    localStorage.setItem('pendingAssignments', JSON.stringify(updatedAssignments));
    fetchStudentData(); // Fetch updated data after adding
  };

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <div className="dashboard-content">
        <section className="dashboard-summary">
          <h2>Summary</h2>
          <p>Welcome back! Here’s an overview of your current progress.</p>
          <ul>
            <li>Courses Enrolled: {enrolledCourses}</li>
            <li>Completed Quizzes: {completedQuizzes}</li>
            <li>Pending Assignments: {pendingAssignments}</li> {/* Updated option */}
          </ul>
          <button onClick={completeAssignment}>Complete Assignment</button>
          <button onClick={addAssignment}>Add Assignment</button>
        </section>

        <section className="dashboard-links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/courses">View Courses</Link></li>
            <li><Link to="/quiz">Take Quiz</Link></li>
            <li><Link to="/virtual-classroom">Join Virtual Classroom</Link></li>
          </ul>
        </section>

        <section className="dashboard-notifications">
          <h2>Notifications</h2>
          <p>You have 2 new messages.</p>
          <p>Your next class starts in 1 hour!</p>
        </section>

        {/* Link to go back to the home page */}
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default Dashboard;
