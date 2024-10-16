
// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'; // Importing the auth routes
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get("/", (req, res) => {
    res.json("It's work!");
});

// Define routes
app.use('/api/auth', authRoutes);

// Sample course data
const courses = [
    { id: '1', name: 'React Development', syllabus: `
        1. Introduction: Overview and ecosystem, Setting up environment
        2. Basics: JSX and components, Props and state, Event handling
        3. Component Lifecycle: Lifecycle methods, Using useEffect
        4. State Management: Local state with useState, Context API, Redux (optional)
        5. Routing: React Router setup, Dynamic routing
        6. Forms: Controlled components, Form validation
        7. Data Fetching: Using fetch and axios, Handling loading states
        8. Hooks: React hooks overview, Custom hooks
        9. Testing: Introduction to testing (Jest, Testing Library)
        10. Deployment: Preparing for production, Deployment options
    `, instructor: "John Doe" },
    { id: '2', name: 'Javascript Basics',syllabus: `
        1. Introduction: JavaScript overview, Setting up environment
        2. Syntax: Variables, Data types, Operators
        3. Control Structures: Conditionals, Loops
        4. Functions: Declaration, Expression, Arrow functions
        5. Arrays: Methods, Iteration, Manipulation
        6. Objects: Creating, Accessing, Methods
        7. DOM Manipulation: Selecting elements, Event handling
        8. Error Handling: Try/catch, Custom errors
        9. ES6 Features: Let/const, Template literals, Destructuring
        10. Async JavaScript: Callbacks, Promises, Async/Await
    `, instructor: "Jane Smith" },
    { id: '3', name: 'CSS Mastery',syllabus:  `
        1. Introduction: CSS overview, Syntax, and selectors
        2. Box Model: Margins, Borders, Padding, Width/Height
        3. Layout: Flexbox, Grid, Positioning
        4. Styling Text: Fonts, Colors, Text alignment
        5. Responsive Design: Media queries, Mobile-first approach
        6. CSS Variables: Custom properties, Theming
        7. Transitions & Animations: Basic animations, Keyframes
        8. Pseudo-classes & Pseudo-elements: :hover, :before, :after
        9. Accessibility: Importance of semantic CSS, ARIA roles
        10. CSS Frameworks: Introduction to Bootstrap, Tailwind CSS
    `, instructor: "Chris Johnson" },

];

const enrollments = []

// Get course information
app.get("/api/courses/:courseId", (req, res) => {
    const courseId = req.params.courseId; // Correctly extract the courseId
    const courseData = courses.find(course => course.id === courseId);

    if (courseData) {
        res.status(200).json(courseData); // Return the course data as JSON
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

app.get("/api/courses", (req, res) => {
    res.status(200).json(courses);
})

app.get("/api/enrollments", (req, res) => {
    res.status(200).json(enrollments);
})

// Enrollment endpoint
app.post('/api/enroll', (req, res) => {
    const { studentId, courseId } = req.body;
    console.log("/api/enroll",studentId, courseId)
    // Implement your enrollment logic here
    // For now, we'll just return a success message
    if (studentId && courseId) {
        enrollments.push({studentId, courseId})
        console.log(enrollments)
        return res.status(200).json({ message: 'Enrollment successful!' });
    } else {
        return res.status(400).json({ message: 'Enrollment failed. Please provide valid student and course IDs.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
