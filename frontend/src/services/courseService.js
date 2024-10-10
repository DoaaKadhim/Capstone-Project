// src/services/courseService.js
import axios from 'axios';

export const getCourseById = async (courseId) => {
  return await axios.get(`/courses/${courseId}`); // Ensure this path matches your Express route
};

// Get all courses
export const getCourses = async () => {
  return await axios.get('/courses');
};

// Enroll user in a course
export const enrollInCourse = async (courseId, userId) => {
  return await axios.post(`/courses/enroll`, { courseId, userId });
};

// Track user progress
export const trackProgress = async (courseId, userId, progressData) => {
  return await axios.post(`/courses/progress`, { courseId, userId, progressData });
};
