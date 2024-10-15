// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute';
// import './App.css';
// import { useEffect } from 'react';

// function App() {
//   useEffect(()=>{
//     async function test(){
//       const response=await fetch('http://localhost:8080/test')
//       const data= await response.json()
//       console.log(data)
//     }
//     test
//   } ,[])
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
/////////////
//new

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import CourseList from './components/CourseList';
// import CourseDetail from './components/CourseDetail';
// import PrivateRoute from './components/PrivateRoute';
// import Quiz from './components/Quiz';
// import VirtualClassroom from './components/VirtualClassroom';
// import Home from './components/Home';
// import LogoutConfirmation from './components/LogoutConfirmation'; // Import the new component
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route 
//             path="/dashboard" 
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             } 
//           />
//           <Route path="/courses" element={<CourseList />} />
//           <Route path="/courses/:id" element={<CourseDetail />} />
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/virtual-classroom" element={<VirtualClassroom />} />
//           <Route path="/logout-confirmation" element={<LogoutConfirmation />} /> {/* Add the logout confirmation route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
///===================other new 
// src/App.js

// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import CourseList from './components/CourseList';
// import CourseDetail from './components/CourseDetail';
// import CourseOverview from './CourseOverview'; // Make sure this path is correct
// import PrivateRoute from './components/PrivateRoute';
// import Quiz from './components/Quiz';
// import VirtualClassroom from './components/VirtualClassroom';
// import Home from './components/Home';
// import LogoutConfirmation from './components/LogoutConfirmation';
// import QuizResult from './components/QuizResult.jsx';
// import VirtualClasses from './components/VirtualClasses'; // Correct import
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route 
//             path="/dashboard" 
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             } 
//           />
//           <Route path="/courses" element={<CourseList />} />
//           {/* <Route path="/courses/:id" element={<CourseDetail />} /> */}
//           <Route path="/course-overview" element={<CourseOverview />} /> {/* Add this line */}
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/virtual-classroom" element={<VirtualClassroom />} />
//           <Route path="/logout-confirmation" element={<LogoutConfirmation />} />
//           <Route path="/quiz-result" element={<QuizResult />} />
//           <Route path="/virtual-classes" element={<VirtualClasses />} /> {/* Add Virtual Classes route */}
//           <Route path="/course-details/:id" element={<CourseDetail />} /> Route for CourseDetail
//           <Route path="/course-details/:id" component={CourseDetail} />
//           <Route
//           path="/enroll/:id"
//           element={
//             <Route
//               path="/enroll/:id"
//               element={(props) => {
//                 const courseId = props.params.id;
//                 const course = getCourseById(courseId);
//                 return <EnrollPage course={course} />;
//               }}
//               />
//             }
//             />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// //try new one 
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import CourseList from './components/CourseList';
// import CourseDetail from './components/CourseDetail';
// import CourseOverview from './CourseOverview'; // Make sure this path is correct
// import PrivateRoute from './components/PrivateRoute';
// import Quiz from './components/Quiz';
// import VirtualClassroom from './components/VirtualClassroom';
// import Home from './components/Home';
// import LogoutConfirmation from './components/LogoutConfirmation';
// import QuizResult from './components/QuizResult.jsx';
// import VirtualClasses from './components/VirtualClasses'; // Correct import
// import EnrollPage from './components/EnrollPage'; // Import EnrollPage
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route 
//             path="/dashboard" 
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             } 
//           />
//           <Route path="/courses" element={<CourseList />} />
//           <Route path="/course-overview" element={<CourseOverview />} /> {/* Add this line */}
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/virtual-classroom" element={<VirtualClassroom />} />
//           <Route path="/logout-confirmation" element={<LogoutConfirmation />} />
//           <Route path="/quiz-result" element={<QuizResult />} />
//           <Route path="/virtual-classes" element={<VirtualClasses />} /> {/* Add Virtual Classes route */}
          
//           {/* Course Details and Enroll Routes */}
//           <Route path="/course-details/:id" element={<CourseDetail />} />
//           <Route path="/enroll/:id" element={<EnrollPage />} /> {/* Route for enrollment */}
//           <Route path="/courses/:id" element={<CourseDetail />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
///the above work 
// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import CourseList from './components/CourseList';
// import CourseDetail from './components/CourseDetail';
// import EnrollPage from './components/EnrollPage'; // Import EnrollPage
// import PrivateRoute from './components/PrivateRoute';
// import Quiz from './components/Quiz';
// import VirtualClassroom from './components/VirtualClassroom';
// import Home from './components/Home';
// import LogoutConfirmation from './components/LogoutConfirmation';
// import QuizResult from './components/QuizResult';
// import VirtualClasses from './components/VirtualClasses';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route 
//             path="/dashboard" 
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             } 
//           />
//           <Route path="/courses" element={<CourseList />} />
//           <Route path="/courses/:id" element={<CourseDetail />} />
//           <Route path="/enroll/:id" element={<EnrollPage />} /> {/* Route for enrollment */}
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/virtual-classroom" element={<VirtualClassroom />} />
//           <Route path="/logout-confirmation" element={<LogoutConfirmation />} />
//           <Route path="/quiz-result" element={<QuizResult />} />
//           <Route path="/virtual-classes" element={<VirtualClasses />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
////try one better
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import CourseOverview from './CourseOverview'; // Import CourseOverview from the correct path
import EnrollPage from './components/EnrollPage'; // Import EnrollPage
import PrivateRoute from './components/PrivateRoute';
import Quiz from './components/Quiz';
import VirtualClassroom from './components/VirtualClassroom';
import Home from './components/Home';
import QuizResult from './components/QuizResult';
import VirtualClasses from './components/VirtualClasses';


import './App.css';

const App = () => {
  const [currentStudentId, setCurrentStudentId] = useState(null);

  useEffect(() => {
    const studentId = localStorage.getItem('studentId'); // Example from localStorage
    setCurrentStudentId(studentId);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard studentId={currentStudentId} /> {/* Pass the studentId prop */}
              </PrivateRoute>
            } 
          />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/course-overview" element={<CourseOverview />} /> {/* Route for Course Overview */}
          <Route path="/enroll/:courseId" element={<EnrollPage />} /> {/* Route for enrollment */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/virtual-classroom" element={<VirtualClassroom />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/virtual-classes" element={<VirtualClasses />} />
          <Route path="/course/:courseId" element={<CourseOverview />} />
          <Route path="/" element={<CourseList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course-detail/:courseId" element={<CourseDetail />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
