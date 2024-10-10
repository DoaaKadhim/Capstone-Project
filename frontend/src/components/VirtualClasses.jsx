import React, { useState, useEffect } from 'react';

const VirtualClasses = () => {
  const [classes, setClasses] = useState([]);

  // Simulate fetching class data from an API or server
  useEffect(() => {
    const fetchClasses = async () => {
      // This would typically come from an API call
      const data = [
        { id: 1, title: 'React Development', date: '2024-10-15', instructor: 'John Doe' },
        { id: 2, title: 'JavaScript Basics', date: '2024-10-18', instructor: 'Jane Smith' },
        { id: 3, title: 'CSS Mastery', date: '2024-10-22', instructor: 'Chris Johnson' }
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
              <p>Date: {cls.date}</p>
              <p>Instructor: {cls.instructor}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VirtualClasses;
