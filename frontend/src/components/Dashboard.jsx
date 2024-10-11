
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
