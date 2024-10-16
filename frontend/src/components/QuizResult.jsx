// import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';

// const QuizResults = () => {
//   const [quizResults, setQuizResults] = useState([]);

//   useEffect(() => {
//     const results = JSON.parse(localStorage.getItem('quizResults')) || [];
//     // Filter results for specific courses
//     const filteredResults = results.filter(result =>
//       ['reactDevelopment', 'javascriptBasics', 'cssMastery'].includes(result.field)
//     );
//     setQuizResults(filteredResults);
//   }, []);

//   return (
//     <div className="quiz-results-container">
//       <h1>Your Quiz Results</h1>
//       {quizResults.length === 0 ? (
//         <p>No quizzes taken yet for the specified courses.</p>
//       ) : (
//         <ul className="quiz-results-list">
//           {quizResults.map((result, index) => (
//             <li key={index} className="quiz-result-item">
//               <h3>Quiz: {result.field.charAt(0).toUpperCase() + result.field.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
//               <p>Score: {result.score}/{result.totalQuestions}</p>
//               <p>Date: {result.date}</p>
//               {result.incorrectQuestions && result.incorrectQuestions.length > 0 && (
//                 <div>
//                   <h4>Incorrect Answers:</h4>
//                   <ul>
//                     {result.incorrectQuestions.map((question, idx) => (
//                       <li key={idx}>
//                         <p>Question: {question.text}</p>
//                         <p>Your Answer: {question.yourAnswer}</p>
//                         <p>Correct Answer: {question.correctAnswer}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}

// <button className="back-button" onClick={() => navigate(-1)}>
//         Go Back
//       </button>
//             {/* <Link to="/" className="back-button">Back to Home</Link> */}
//     </div>
//   );
// };

// export default QuizResults;


///////////
//change the button 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const QuizResults = () => {
  const [quizResults, setQuizResults] = useState([]);

  // Initialize useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem('quizResults')) || [];
    // Filter results for specific courses
    const filteredResults = results.filter(result =>
      ['reactDevelopment', 'javascriptBasics', 'cssMastery'].includes(result.field)
    );
    setQuizResults(filteredResults);
  }, []);

  return (
    <div className="quiz-results-container">
      <h1>Your Quiz Results</h1>
      {quizResults.length === 0 ? (
        <p>No quizzes taken yet for the specified courses.</p>
      ) : (
        <ul className="quiz-results-list">
          {quizResults.map((result, index) => (
            <li key={index} className="quiz-result-item">
              <h3>Quiz: {result.field.charAt(0).toUpperCase() + result.field.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
              <p>Score: {result.score}/{result.totalQuestions}</p>
              <p>Date: {result.date}</p>
              {result.incorrectQuestions && result.incorrectQuestions.length > 0 && (
                <div>
                  <h4>Incorrect Answers:</h4>
                  <ul>
                    {result.incorrectQuestions.map((question, idx) => (
                      <li key={idx}>
                        <p>Question: {question.text}</p>
                        <p>Your Answer: {question.yourAnswer}</p>
                        <p>Correct Answer: {question.correctAnswer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {/* <Link to="/" className="back-button">Back to Home</Link> */}
    </div>
  );
};

export default QuizResults;
