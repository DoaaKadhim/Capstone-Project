// src/CourseOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Inside your component
<Link to="/course-overview">Course Overview</Link>

const CourseOverview = () => {
  return (
    <section id="course-overview">
      <h1>Course Title: Web Development Fundamentals</h1>
      <p className="description">
        This course provides an introduction to web development, covering essential technologies like HTML, CSS, and JavaScript.
      </p>
      <h2>Learning Objectives</h2>
      
        <li>Understand core web technologies.</li>
        <li>Build responsive web applications.</li>
        <li>Implement interactivity using JavaScript.</li>
      
      <h2>Course Outline</h2>
      
        <li><strong>Module 1: Introduction to HTML/CSS</strong> - Learn the basics of web structure and styling.</li>
        <li><strong>Module 2: JavaScript Basics</strong> - Explore programming fundamentals.</li>
      
      <h2>Prerequisites</h2>
      <p>Basic understanding of computer science concepts.</p>
      <h2>Target Audience</h2>
      <p>This course is designed for beginners interested in web development.</p>
      <h2>Course Duration</h2>
      <p>8 weeks, 3 hours per week.</p>
      <h2>Assessment Methods</h2>
      <p>Quizzes, projects, and a final exam.</p>
      <h2>Course Materials</h2>
      <p>Textbook: "HTML & CSS: Design and Build Websites" by Jon Duckett.</p>
      <h2>Instructor Information</h2>
      <p>Jane Doe, a web development expert with over 10 years of experience.</p>
      <h2>FAQs</h2>
      <p><strong>Q: How much time do I need to dedicate to this course?</strong><br />A: Expect to spend around 3 hours per week.</p>
      <Link to="/" className="back-button">Back to Home</Link>

    </section>
    
  );
};

export default CourseOverview;
