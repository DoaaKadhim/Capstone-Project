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
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import PrivateRoute from './components/PrivateRoute';
import Quiz from './components/Quiz';
import VirtualClassroom from './components/VirtualClassroom';
import Home from './components/Home'; // Import the Home component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Redirect root path to /home */}
          <Route path="/" element={<Navigate to="/home" />} /> 
          <Route path="/home" element={<Home />} /> {/* Home page route */}
          <Route path="/login" element={<Login />} />
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
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/virtual-classroom" element={<VirtualClassroom />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
