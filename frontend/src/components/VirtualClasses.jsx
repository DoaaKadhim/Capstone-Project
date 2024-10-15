
// VirtualClasses.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VirtualClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const data = [
        {
          id: 1,
          title: 'React Development',
          date: '2024-10-15',
          instructor: 'John Doe',
          syllabus: 'Learn the basics of React and component-based development.',
          enrollmentInstructions: 'To enroll, click the link below.',
        },
        {
          id: 2,
          title: 'JavaScript Basics',
          date: '2024-10-18',
          instructor: 'Jane Smith',
          syllabus: 'Understand the fundamentals of JavaScript.',
          enrollmentInstructions: 'To enroll, contact us at enroll@example.com.',
        },
        {
          id: 3,
          title: 'CSS Mastery',
          date: '2024-10-22',
          instructor: 'Chris Johnson',
          syllabus: 'Master the art of styling with CSS.',
          enrollmentInstructions: 'Enroll through our portal.',
        },
      ];

      setClasses(data);
    };

    fetchClasses();
  }, []);

  return (
    <div className="virtual-classes-container">
      <h1>Upcoming Virtual Classes</h1>
      {classes.length === 0 ? (
        <p>No upcoming classes.</p>
      ) : (
        <ul className="classes-list">
          {classes.map((cls) => (
            <li key={cls.id} className="class-item">
              <h3>{cls.title}</h3>
              <p><strong>Date:</strong> {cls.date}</p>
              <p><strong>Instructor:</strong> {cls.instructor}</p>
              <p><strong>Syllabus:</strong> {cls.syllabus}</p>
              <p><strong>Enroll:</strong> {cls.enrollmentInstructions}</p>
              <Link to={`/enroll/${cls.id}`} className="enroll-link">
                Enroll
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/home" className="back-button">Back to Home</Link>
    </div>
  );
};

export default VirtualClasses; // Ensure this line is present
