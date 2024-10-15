
// /////////////////// update 
// import React from 'react';
// import { Link } from 'react-router-dom';

// const VirtualClassroom = () => {
//   // Sample upcoming classes data
//   const classes = [
    
//     { id: 1, name: 'React Development', time: '10:00 AM - 11:00 AM' },
//     { id: 2, name: 'Javascript Basics', time: '1:00 PM - 2:00 PM' },
//     { id: 3, name: 'CSS Mastery', time: '1:00 PM - 2:00 PM' },

//   ];

//   return (
//     <div>
//       <h2>Virtual Classroom</h2>

//       {/* Video Streaming Feature */}
//       <div className="video-container">
//         <video width="600" controls>
//           <source src="your-video-url.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Upcoming Classes Section */}
//       <h3>Upcoming Classes</h3>
//       <ul>
//         {classes.map((cls) => (
//           <li key={cls.id}>
//             {cls.name} - {cls.time} <button>Join Class</button>
//           </li>
//         ))}
//       </ul>

//       {/* Link to navigate back to the home page */}
//       <Link to="/home" className="back-button">Back to Home</Link>
//     </div>
//   );
// };

// export default VirtualClassroom;
// ////////////////////////
// //the above one works very

///try to add more feature 


import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaMicrophone, FaMicrophoneSlash, FaVideoSlash } from 'react-icons/fa'; // Importing icons from react-icons

const VirtualClassroom = () => {
  const [cameraStream, setCameraStream] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [loading, setLoading] = useState(true); // New loading state
  const videoRef = useRef(null);

  // Sample upcoming classes data
  const classes = [
    { id: 1, name: 'React Development', time: '10:00 AM - 11:00 AM' },
    { id: 2, name: 'Javascript Basics', time: '1:00 PM - 2:00 PM' },
    { id: 3, name: 'CSS Mastery', time: '1:00 PM - 2:00 PM' },
  ];

  // Function to start the camera
  const startCamera = async () => {
    setLoading(true); // Set loading to true when starting the camera
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: isCameraOn ? true : false, // Request video only if the camera is on
        audio: isMicOn ? true : false,     // Request audio only if the mic is on
      });
      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream; // Attach the stream to the video element
      }
      setLoading(false); // Set loading to false after the camera is started
    } catch (error) {
      console.error('Error accessing the camera:', error);
      setLoading(false); // Set loading to false even on error
    }
  };

  // Function to toggle the camera on/off
  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  // Function to toggle the microphone on/off
  const toggleMic = () => {
    setIsMicOn((prev) => !prev);
  };

  // Stop the camera stream on unmount
  useEffect(() => {
    startCamera();

    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop()); // Stop the tracks when the component unmounts
      }
    };
  }, []); // Run once on mount

  useEffect(() => {
    if (cameraStream) {
      // Update the video stream based on camera state
      const videoTracks = cameraStream.getVideoTracks();
      if (videoTracks.length > 0) {
        videoTracks[0].enabled = isCameraOn; // Enable/disable the video track
      } else {
        startCamera(); // Restart camera if video track is not available
      }
    }
  }, [isCameraOn]); // Run when camera state changes

  useEffect(() => {
    if (cameraStream) {
      // Update the audio stream based on mic state
      const audioTracks = cameraStream.getAudioTracks();
      if (audioTracks.length > 0) {
        audioTracks[0].enabled = isMicOn; // Enable/disable the audio track
      } else {
        startCamera(); // Restart audio if audio track is not available
      }
    }
  }, [isMicOn]); // Run when microphone state changes

  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <h2>Virtual Classroom</h2>

      {/* Loading Indicator */}
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#000',
        }}>
          Loading...
        </div>
      )}

      {/* Camera Feed with Control Buttons */}
      {cameraStream && !loading && (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <video
            ref={videoRef} // Attach the video element to the ref
            autoPlay
            playsInline
            muted
            style={{
              width: '200px', // Set width of the camera feed
              height: '150px', // Set height of the camera feed
              borderRadius: '8px', // Optional: rounded corners
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Optional: shadow effect
            }}
          />
          <div style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            display: 'flex', 
            gap: '10px' 
          }}>
            <div
              onClick={toggleCamera}
              style={{
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.7)', // Light background for better visibility
                borderRadius: '50%',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isCameraOn ? <FaCamera size={20} color="green" /> : <FaVideoSlash size={20} color="red" />}
            </div>
            <div
              onClick={toggleMic}
              style={{
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.7)', // Light background for better visibility
                borderRadius: '50%',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isMicOn ? <FaMicrophone size={20} color="green" /> : <FaMicrophoneSlash size={20} color="red" />}
            </div>
          </div>
        </div>
      )}

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
