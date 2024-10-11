// import React, { useEffect, useState } from 'react';
// import axios from '../utils/axiosConfig'; // Corrected import path

// const Dashboard = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('/your-api-endpoint'); // Adjust the endpoint
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <ul>
//                 {data.map(item => (
//                     <li key={item.id}>{item.name}</li> // Adjust based on your data structure
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Dashboard;
////////////////////

// // src/component/Dashboard.js
// import React from 'react';
// import authService from '../service/authService';

// const Dashboard = () => {
//   const user = authService.getCurrentUser();

//   return (
//     <div className="dashboard-container">
//       <h2>Welcome, {user ? user.name : 'Guest'}</h2>
//       <p>Your dashboard with course progress and recommendations will go here.</p>
//       <button className="btn btn-danger" onClick={authService.logout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;
///////////////////
//new
// // src/components/Dashboard.jsx
// import React from 'react';
// import CourseList from './CourseList';
// import Profile from './Profile';

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <Profile />
//       <CourseList />
//     </div>
//   );
// };

// export default Dashboard;

// ////// other new one 
// import React from 'react';
// import CourseList from './CourseList';
// import Profile from './Profile.jsx';  // Import Profile component

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {/* Profile component */}
//       <Profile />

//       {/* Course list or other components */}
//       <CourseList />
//     </div>
//   );
// };

// export default Dashboard;
///////////////////NEW TRY
// src/components/Dashboard.jsx
// // src/components/Dashboard.jsx
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Dashboard = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Simulate fetching courses (replace this with your API call)
//     const fetchCourses = async () => {
//       // Sample courses data (replace this with an actual API call)
//       const sampleCourses = [
//         { id: 1, title: 'React for Beginners' },
//         { id: 2, title: 'Advanced JavaScript' },
//         { id: 3, title: 'Introduction to CSS' },
//       ];
//       setCourses(sampleCourses);
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2>This is your Dashboard!</h2>
//       <p>Here are your courses!</p>
//       <ul>
//         {courses.map(course => (
//           <li key={course.id}>{course.title}</li>
//         ))}
//       </ul>
//       <Link to="/home">Back to Home</Link>

//     </div>
//   );
// };

// export default Dashboard; // Ensure only one default export
////////////////////////more new 


// src/components/Dashboard.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Import your CSS for styling

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       <div className="dashboard-content">
//         <section className="dashboard-summary">
//           <h2>Summary</h2>
//           <p>Welcome back! Here’s an overview of your current progress.</p>
//           <ul>
//             <li>Courses Enrolled: 5</li>
//             <li>Completed Quizzes: 10</li>
//             <li>Upcoming Classes: 3</li>
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
//       </div>
//       <Link to="/" className="back-button">Back to Home</Link>
//     </div>
//   );
// };

// export default Dashboard;
/////////last try 
// src/components/Dashboard.js
///////////////////////////
////////////////////////////
// //work

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Import your CSS for styling
// import { useLocation } from 'react-router-dom';


// const Dashboard = () => {
//   const location = useLocation();
//   console.log('Current location:', location.pathname); // Log the current path

//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       <div className="dashboard-content">
//         <section className="dashboard-summary">
//           <h2>Summary</h2>
//           <p>Welcome back! Here’s an overview of your current progress.</p>
//           <ul>
//             <li>Courses Enrolled: 5</li>
//             <li>Completed Quizzes: 10</li>
//             <li>Upcoming Classes: 3</li>
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
//       </div>
//       <Link to="/" className="back-button">Back to Home</Link>
//     </div>
//   );
// };

// export default Dashboard;
/////////////////////
//////////////////////

//++++++++++++++++++++++++

// // src/components/Dashboard.js
// import React from 'react';
// import '../App.css'; // Import relevant styles

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       <p>Welcome to your dashboard! Here you can see your courses, progress, and more.</p>

//       <section>
//         <h2>Your Courses</h2>
//         <ul>
//           <li>Course 1</li>
//           <li>Course 2</li>
//           <li>Course 3</li>
//         </ul>
//       </section>

//       <section>
//         <h2>Recent Quizzes</h2>
//         <ul>
//           <li>Quiz 1</li>
//           <li>Quiz 2</li>
//           <li>Quiz 3</li>
//         </ul>
//       </section>
      
//       {/* Add more sections as needed */}
//     </div>
//   );
// };

// export default Dashboard;
//--------------------------

// import React from 'react';

// const Dashboard = () => {
//   const user = JSON.parse(localStorage.getItem('user')); // Assuming user data is saved in localStorage after login

//   return (
//     <div className="dashboard-container">
//       <header className="dashboard-header">
//         <h1>Welcome, {user?.name || 'User'}!</h1> {/* Display the logged-in user's name */}
//         <p>You are logged in as: {user?.email || 'No email'}</p> {/* Show the user's email */}
//       </header>

//       <section className="dashboard-content">
//         <h2>Your Courses</h2>
//         {/* Sample overview of enrolled courses */}
//         <div className="courses-overview">
//           <p>Course 1 - 50% completed</p>
//           <p>Course 2 - 80% completed</p>
//         </div>

//         <h2>Recent Quizzes</h2>
//         <div className="quiz-overview">
//           <p>Quiz 1 - Score: 85%</p>
//           <p>Quiz 2 - Score: 92%</p>
//         </div>

//         <h2>Upcoming Virtual Classes</h2>
//         <div className="virtual-classes">
//           <p>Class 1 - Tomorrow at 10 AM</p>
//           <p>Class 2 - Thursday at 2 PM</p>
//         </div>
//       </section>

//       <nav className="dashboard-navigation">
//         <ul>
//           <li><a href="/courses">View All Courses</a></li>
//           <li><a href="/quiz">Take a Quiz</a></li>
//           <li><a href="/virtual-classroom">Join a Virtual Classroom</a></li>
//           <li><a href="/profile">Update Profile</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Dashboard;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'; // Import your CSS for styling
// import { useLocation } from 'react-router-dom';

// const Dashboard = () => {
//   const location = useLocation();
//   console.log('Current location:', location.pathname); // Log the current path

//   return (
//     <div className="dashboard-container">
//       <h1>Student Dashboard</h1>
//       <div className="dashboard-content">
//         <section className="dashboard-summary">
//           <h2>Summary</h2>
//           <p>Welcome back! Here’s an overview of your current progress.</p>
//           <ul>
//             <li>Courses Enrolled: 5</li>
//             <li>Completed Quizzes: 10</li>
//             <li>Upcoming Classes: 3</li>
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
//try new one 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your CSS for styling
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Dashboard = ({ studentId }) => {
  const location = useLocation();
  const [enrolledCoursesCount, setEnrolledCoursesCount] = useState(0);
  const [completedQuizzesCount, setCompletedQuizzesCount] = useState(0); // Assuming you want to track completed quizzes
  const [upcomingClassesCount, setUpcomingClassesCount] = useState(0); // Assuming you want to track upcoming classes
useEffect(()=>{

},[]
)
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch enrolled courses count from your API
        const response = await axios.get(`/api/students/${studentId}/enrolledCourses`);
        setEnrolledCoursesCount(response.data.length);

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, [studentId]); // Ensure to fetch data whenever the studentId changes

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <div className="dashboard-content">
        <section className="dashboard-summary">
          <h2>Summary</h2>
          <p>Welcome back! Here’s an overview of your current progress.</p>
          <ul>
            <li>Courses Enrolled: {enrolledCoursesCount}</li>
            <li>Completed Quizzes: {completedQuizzesCount}</li>
            <li>Upcoming Classes: {upcomingClassesCount}</li>
          </ul>
        </section>

        <section className="dashboard-links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/courses">View Courses</Link></li>
            <li><Link to="/quiz">Take Quiz</Link></li>
            <li><Link to="/virtual-classroom">Join Virtual Classroom</Link></li>
            {/* <li><Link to="/course-overview">Course Overview</Link></li> Added link to course overview */}
          </ul>
        </section>

        <section className="dashboard-notifications">
          <h2>Notifications</h2>
          <p>You have 2 new messages.</p>
          <p>Your next class starts in 1 hour!</p>
        </section>
      </div>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default Dashboard;
