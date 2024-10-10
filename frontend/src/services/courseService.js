// src/services/courseService.js
// // src/services/courseService.js
import axios from 'axios';

export const getCourseById = async (courseId) => {
  return await axios.get(`/courses/${courseId}`); // Ensure this path matches your Express route
};

// Get all courses
export const getCourses = async () => {
  return await axios.get('/courses');
};

// src/services/courseService.js
// export const getCourseById = async (id) => {
//   try {
//     const response = await axios.get(`/courses/${id}`); // Make sure this endpoint is correct
//     return response.data; // Return the course data
//   } catch (error) {
//     console.error("Error fetching course:", error);
//     throw error; // Rethrow the error for handling in the component
//   }
// };

// Enroll user in a course
export const enrollInCourse = async (courseId, userId) => {
  return await axios.post(`/courses/enroll`, { courseId, userId });
};

// Track user progress
export const trackProgress = async (courseId, userId, progressData) => {
  return await axios.post(`/courses/progress`, { courseId, userId, progressData });
};
