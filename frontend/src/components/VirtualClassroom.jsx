// // src/components/VirtualClassroom.jsx
// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const VirtualClassroom = () => {
//   return (
//     <div>
//       <h2>Virtual Classroom</h2>
//       {/* Integrate video streaming service or classroom features */}
//       <button>Join Class</button>

//       {/* Link to navigate back to the home page */}
//       <Link to="/home" className="back-button">Back to Home</Link>
//     </div>
//   );
// };

// export default VirtualClassroom;
/////////////////// update 
import React from 'react';
import { Link } from 'react-router-dom';

const VirtualClassroom = () => {
  // Sample upcoming classes data
  const classes = [
    
    { id: 1, name: 'React Development', time: '10:00 AM - 11:00 AM' },
    { id: 2, name: 'Javascript Basics', time: '1:00 PM - 2:00 PM' },
    { id: 3, name: 'CSS Mastery', time: '1:00 PM - 2:00 PM' },

  ];

  return (
    <div>
      <h2>Virtual Classroom</h2>

      {/* Video Streaming Feature */}
      <div className="video-container">
        <video width="600" controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Upcoming Classes Section */}
      <h3>Upcoming Classes</h3>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>
            {cls.name} - {cls.time} <button>Join Class</button>
          </li>
        ))}
      </ul>

      {/* Link to navigate back to the home page */}
      <Link to="/home" className="back-button">Back to Home</Link>
    </div>
  );
};

export default VirtualClassroom;
