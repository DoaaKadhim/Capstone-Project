
// src/services/courseService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust this URL to match your backend

// Fetch all courses
export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/courses`);
    console.log(response.data)
    return response.data; // Return the actual courses data
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error; // Throw error to handle it in the calling component
  }
};

// Fetch a course by ID
export const getCourseById = async (courseId) => {
  try {
    const response = await axios.get(`${API_URL}/api/courses/${courseId}`);
    return response.data; // Return the course data
  } catch (error) {
    console.error(`Error fetching course with ID ${courseId}:`, error);
    throw error;
  }
};

// Enroll user in a course
export const enrollInCourse = async (courseId, userId) => {
  try {
    const response = await axios.post('/api/courses/enroll', { courseId, userId });
    return response.data; // Return success/failure response
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

// Track user progress
export const trackProgress = async (courseId, userId, progressData) => {
  try {
    const response = await axios.post('/api/courses/progress', { courseId, userId, progressData });
    return response.data; // Return success/failure response
  } catch (error) {
    console.error("Error tracking progress:", error);
    throw error;
  }
};


//===================================
export const completeQuiz = (currentQuizCount) => {
  const newQuizCount = currentQuizCount + 1;  // Increment the current quiz count
  localStorage.setItem('completedQuizzes', JSON.stringify(newQuizCount));  // Store the updated quiz count in localStorage
  return newQuizCount;  // Return the updated quiz count
};

export const fetchStudentData = () => {
  const courses = JSON.parse(localStorage.getItem('enrolledCourses')) || 0;
  const quizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || 0;  // Fetch quizzes count
  const classes = JSON.parse(localStorage.getItem('upcomingClasses')) || 0;
  
  return {
    courses,
    quizzes,
    classes,
  };
};
