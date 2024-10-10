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

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import CourseOverview from './CourseOverview'; // Make sure this path is correct
import PrivateRoute from './components/PrivateRoute';
import Quiz from './components/Quiz';
import VirtualClassroom from './components/VirtualClassroom';
import Home from './components/Home';
import LogoutConfirmation from './components/LogoutConfirmation';
import QuizResult from './components/QuizResult.jsx';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/course-overview" element={<CourseOverview />} /> {/* Add this line */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/virtual-classroom" element={<VirtualClassroom />} />
          <Route path="/logout-confirmation" element={<LogoutConfirmation />} />
          <Route path="/quiz-result" element={<QuizResult />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
