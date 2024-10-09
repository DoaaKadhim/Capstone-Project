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

////// other new one 
import React from 'react';
import CourseList from './CourseList';
import Profile from './Profile.jsx';  // Import Profile component

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Profile component */}
      <Profile />

      {/* Course list or other components */}
      <CourseList />
    </div>
  );
};

export default Dashboard;
