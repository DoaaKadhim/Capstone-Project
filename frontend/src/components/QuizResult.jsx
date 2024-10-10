// // src/components/QuizResult.jsx
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const QuizResult = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Destructure state from location to get quiz result data
//   const { score, totalQuestions, incorrectQuestions } = location.state || {};

//   // If no state is passed, display a message and return early
//   if (!location.state) {
//     return <p>No quiz data available. Please take the quiz first.</p>;
//   }

//   return (
//     <div className="quiz-result-container">
//       <h1>Quiz Results</h1>
//       <p>Your Score: {score} / {totalQuestions}</p>
//       <h2>Incorrect Answers:</h2>
//       <ul>
//         {incorrectQuestions.map((question, index) => (
//           <li key={index}>
//             <strong>Question:</strong> {question.text} <br />
//             <strong>Your Answer:</strong> {question.yourAnswer} <br />
//             <strong>Correct Answer:</strong> {question.correctAnswer}
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => navigate('/home')}>Go to Home</button>
//     </div>
//   );
// };

// export default QuizResult;
//////////
// // src/components/QuizResult.jsximport React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const QuizResult = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Destructure state from location to get quiz result data
//   const { score = 0, totalQuestions = 0, incorrectQuestions = [] } = location.state || {};

//   // If no state is passed, display a message and return early
//   if (!location.state) {
//     return <p>No quiz data available. Please take the quiz first.</p>;
//   }

//   return (
//     <div className="quiz-result-container">
//       <h1>Quiz Results</h1>
//       <p>Your Score: {score} / {totalQuestions}</p>
//       <h2>Incorrect Answers:</h2>
//       {incorrectQuestions.length > 0 ? (
//         <ul>
//           {incorrectQuestions.map((question, index) => (
//             <li key={index}>
//               <strong>Question:</strong> {question.text} <br />
//               <strong>Your Answer:</strong> {question.yourAnswer} <br />
//               <strong>Correct Answer:</strong> {question.correctAnswer}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No incorrect answers.</p>
//       )}
//       <button onClick={() => navigate('/home')}>Go to Home</button>
//     </div>
//   );
// };

// export default QuizResult;
//////////try new one 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QuizResults = () => {
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem('quizResults')) || [];
    setQuizResults(results);
  }, []);

  return (
    <div className="quiz-results-container">
      <h1>Your Quiz Results</h1>
      {quizResults.length === 0 ? (
        <p>No quizzes taken yet.</p>
      ) : (
        <ul className="quiz-results-list">
          {quizResults.map((result, index) => (
            <li key={index} className="quiz-result-item">
              <h3>Quiz: {result.field.charAt(0).toUpperCase() + result.field.slice(1)}</h3>
              <p>Score: {result.score}/{result.totalQuestions}</p>
              <p>Date: {result.date}</p>
            </li>
          ))}
        </ul>
      )}
      <Link to="/home" className="back-to-home">Back to Home</Link>
    </div>
  );
};

export default QuizResults;
