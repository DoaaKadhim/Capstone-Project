
//try new one ========
// src/EnrollPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const EnrollPage = () => {
    const { courseId } = useParams(); // Retrieve courseId from URL params
    const [studentId, setStudentId] = useState(''); // Replace with actual student ID logic
    const [enrollmentMessage, setEnrollmentMessage] = useState('');

    const handleEnroll = async () => {
               try {
            console.log('Enrolling with test data:', { studentId, courseId });
            const response = await axios.post('http://localhost:5000/api/enroll', {
                studentId: studentId,
                courseId: courseId,
            });
            setEnrollmentMessage('Enrollment successful: ' + response.data.message);
            console.log('Enrollment successful:', response.data);
        } catch (error) {
            console.error('Enrollment failed:', error);
            setEnrollmentMessage('Enrollment failed: ' + error.response.data.message);
        }
    };
    
    return (
        <div>
            <h1>Enroll in Course {courseId}</h1>
            <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Enter Student ID"
            />
            
            <button className="back-button" onClick={handleEnroll}>Enroll</button>
            <Link to="/" className="back-button">Back to Home</Link>
            {enrollmentMessage && <p>{enrollmentMessage}</p>},
            
        </div>
        
    );
    
};

export default EnrollPage;
