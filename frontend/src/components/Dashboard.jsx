
////try to change the button
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; // Import your CSS for styling

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [enrolledCourses, setEnrolledCourses] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [pendingAssignments, setPendingAssignments] = useState(0); // Updated state variable

  // State to manage comments
  const [comments, setComments] = useState([]);

  // State for custom comment input
  const [customComment, setCustomComment] = useState('');

  // Function to fetch the latest data from localStorage
  const fetchStudentData = () => {
    const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || 0;
    const quizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || 0;
    const assignments = JSON.parse(localStorage.getItem('pendingAssignments')) || 0; // Fetch pending assignments

    setEnrolledCourses(courses);
    setCompletedQuizzes(quizzes);
    setPendingAssignments(assignments); // Update pending assignments state

    // Load comments from localStorage
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(savedComments);
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

  // Function to add a custom comment
  const addCustomComment = () => {
    if (customComment.trim()) {
      const updatedComments = [...comments, customComment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
      setCustomComment(''); // Clear input field
    }
  };

  // Function to delete a comment
  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments)); // Update localStorage
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the login page
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
            <li><button onClick={() => navigate('/courses')}>View Courses</button></li>
            <li><button onClick={() => navigate('/quiz')}>Take Quiz</button></li>
            <li><button onClick={() => navigate('/virtual-classroom')}>Join Virtual Classroom</button></li>
          </ul>
        </section>

        <section className="dashboard-comments">
          <h2>Comments</h2>

          {/* Render saved comments with delete option */}
          {comments.map((comment, index) => (
            <div key={index} className="comment-item">
              <p>{comment}</p>
              <button onClick={() => deleteComment(index)}>Delete</button>
            </div>
          ))}

          {/* Input for custom comments */}
          <div className="comment-input">
            <input
              type="text"
              value={customComment}
              onChange={(e) => setCustomComment(e.target.value)}
              placeholder="Write your comment here..."
            />
            <button onClick={addCustomComment}>Add Comment</button>
          </div>
        </section>

        {/* Replaced Link with a Go Back button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
        
        <button className="logout-button" onClick={handleLogout}>Logout</button> 
      </div>
    </div>
  );
};

export default Dashboard;
