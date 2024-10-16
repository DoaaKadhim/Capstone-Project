
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EnrollPage = () => {
    const { courseId } = useParams(); // Retrieve courseId from URL params
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [studentId, setStudentId] = useState(''); // State for student ID
    const [enrollmentSuccess, setEnrollmentSuccess] = useState(false); // State for enrollment success
    const [enrollmentMessage, setEnrollmentMessage] = useState('');

    const handleEnroll = async () => {
        try {
            console.log('Enrolling with test data:', { studentId, courseId });
            const response = await axios.post('http://localhost:5000/api/enroll', {
                studentId: studentId,
                courseId: courseId,
            });

            setEnrollmentMessage('Enrollment successful: ' + response.data.message);
            setEnrollmentSuccess(true);

            // Update enrolled courses in localStorage
            const currentEnrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || 0;
            localStorage.setItem('enrolledCourses', JSON.stringify(currentEnrolledCourses + 1));

            console.log('Enrollment successful:', {
                studentId,
                courseId,
                responseData: response.data
            });
        } catch (error) {
            console.error('Enrollment failed:', error);
            setEnrollmentMessage('Enrollment failed: ' + (error.response?.data?.message || 'Unexpected error occurred.'));
        }
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {!enrollmentSuccess ? ( // Show enrollment form if not enrolled
                <>
                    <h1>Enroll in Course: {courseId}</h1> {/* Display course ID here */}
                    <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        placeholder="Enter Student ID"
                    />
                    <button className="enroll-button" onClick={handleEnroll}>
                        Enroll
                    </button>
                    <button className="back-button" onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                </>
            ) : ( // Show success message if enrolled
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#f0f8ff', // Optional background color
                    borderRadius: '8px', // Optional rounded corners
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Optional shadow effect
                }}>
                    <h1 style={{ fontSize: '3rem', color: 'green' }}>{enrollmentMessage}</h1>
                    <p style={{ fontSize: '1.5rem' }}>Thank you for enrolling!</p>
                    <p style={{ fontSize: '1.2rem' }}>Student ID: {studentId}</p>
                    <p style={{ fontSize: '1.2rem' }}>Course ID: {courseId}</p> {/* Display course ID here */}
                    <button className="back-button" onClick={() => navigate(-1)} style={{ fontSize: '1.2rem' }}>
                        Back to Previous Page
                    </button>
                </div>
            )}
        </div>
    );
};

export default EnrollPage;
