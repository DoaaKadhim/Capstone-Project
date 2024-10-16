
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import CourseList from './components/CourseList';
// import CourseDetail from './components/CourseDetail';
// import CourseOverview from './CourseOverview'; // Import CourseOverview from the correct path
// import EnrollPage from './components/EnrollPage'; // Import EnrollPage
// import PrivateRoute from './components/PrivateRoute';
// import Quiz from './components/Quiz';
// import VirtualClassroom from './components/VirtualClassroom';
// import Home from './components/Home';
// import QuizResult from './components/QuizResult';
// import VirtualClasses from './components/VirtualClasses';
// import LearningResources from './components/LearningResources'; // Import your new component


// import './App.css';

// const App = () => {
//   const [currentStudentId, setCurrentStudentId] = useState(null);

//   useEffect(() => {
//     const studentId = localStorage.getItem('studentId'); // Example from localStorage
//     setCurrentStudentId(studentId);
//   }, []);

//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route 
//             path="/dashboard" 
//             element={
//               <PrivateRoute>
//                 <Dashboard studentId={currentStudentId} /> {/* Pass the studentId prop */}
//               </PrivateRoute>
//             } 
//           />
//           <Route path="/courses" element={<CourseList />} />
//           <Route path="/courses/:id" element={<CourseDetail />} />
//           <Route path="/course-overview" element={<CourseOverview />} /> {/* Route for Course Overview */}
//           <Route path="/enroll/:courseId" element={<EnrollPage />} /> {/* Route for enrollment */}
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/virtual-classroom" element={<VirtualClassroom />} />
//           <Route path="/quiz-result" element={<QuizResult />} />
//           <Route path="/virtual-classes" element={<VirtualClasses />} />
//           <Route path="/course/:courseId" element={<CourseOverview />} />
//           <Route path="/" element={<CourseList />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/course-detail/:courseId" element={<CourseDetail />} />
//           <Route path="/learning-resources" element={<LearningResources />} /> {/* Use element prop */}

//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
///try to add logout 

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import CourseList from './components/CourseList';
// import CourseDetail from './components/CourseDetail';
// import CourseOverview from './CourseOverview';
// import EnrollPage from './components/EnrollPage';
// import PrivateRoute from './components/PrivateRoute';
// import Quiz from './components/Quiz';
// import VirtualClassroom from './components/VirtualClassroom';
// import Home from './components/Home';
// import QuizResult from './components/QuizResult';
// import VirtualClasses from './components/VirtualClasses';
// import LearningResources from './components/LearningResources';
// import './App.css';

// const App = () => {
//   const [currentStudentId, setCurrentStudentId] = useState(null);

//   useEffect(() => {
//     const studentId = localStorage.getItem('studentId');
//     setCurrentStudentId(studentId);
//   }, []);

//   const logout = () => {
//     // Clear the token and student ID from local storage
//     localStorage.removeItem('token');  // Assuming you store the JWT token here
//     localStorage.removeItem('studentId');
//     setCurrentStudentId(null); // Update state
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <header>
//           {currentStudentId && <button onClick={logout}>Logout</button>}
//         </header>
//         <Routes>
//         <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/home" element={<Home />} />
//           <Route 
//             path="/dashboard" 
//             element={
//               <PrivateRoute>
//                 <Dashboard studentId={currentStudentId} />
//               </PrivateRoute>
//             } 
//           />
//           <Route path="/courses" element={<CourseList />} />
//           <Route path="/courses/:id" element={<CourseDetail />} />
//           <Route path="/course-overview" element={<CourseOverview />} />
//           <Route path="/enroll/:courseId" element={<EnrollPage />} />
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/virtual-classroom" element={<VirtualClassroom />} />
//           <Route path="/quiz-result" element={<QuizResult />} />
//           <Route path="/virtual-classes" element={<VirtualClasses />} />
//           <Route path="/course/:courseId" element={<CourseOverview />} />
//           <Route path="/learning-resources" element={<LearningResources />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
/////////try to login first
 import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import CourseOverview from './CourseOverview';
import EnrollPage from './components/EnrollPage';
import PrivateRoute from './components/PrivateRoute';
import Quiz from './components/Quiz';
import VirtualClassroom from './components/VirtualClassroom';
import Home from './components/Home';
import QuizResult from './components/QuizResult';
import VirtualClasses from './components/VirtualClasses';
import LearningResources from './components/LearningResources';
import './App.css';

const App = () => {
  const [currentStudentId, setCurrentStudentId] = useState(null);

  useEffect(() => {
    const studentId = localStorage.getItem('studentId');
    setCurrentStudentId(studentId);
  }, []);

  const logout = () => {
    // Clear the token and student ID from local storage
    localStorage.removeItem('token'); // Assuming you store the JWT token here
    localStorage.removeItem('studentId');
    setCurrentStudentId(null); // Update state
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          {currentStudentId && <button onClick={logout}>Logout</button>}
        </header>
        <Routes>
          {/* Set the login route as the default */}
          <Route path="/login" element={<Login setCurrentStudentId={setCurrentStudentId} />} />
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login page */}
          <Route path="/home" element={<Home />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard studentId={currentStudentId} />
              </PrivateRoute>
            } 
          />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/course-overview" element={<CourseOverview />} />
          <Route path="/enroll/:courseId" element={<EnrollPage />} />

          <Route path="/quiz" element={<Quiz />} />
          <Route path="/virtual-classroom" element={<VirtualClassroom />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/virtual-classes" element={<VirtualClasses />} />
          <Route path="/course/:courseId" element={<CourseOverview />} />
          <Route path="/learning-resources" element={<LearningResources />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
