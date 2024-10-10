
// ////////////////
// /////try new one with diiferent option// src/components/Quiz.jsx
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Quiz = () => {
//   const navigate = useNavigate();
//   const [score, setScore] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [selectedField, setSelectedField] = useState(null);
//   const [feedback, setFeedback] = useState(null); // State to show feedback
//   const [isAnswered, setIsAnswered] = useState(false); // Disable options after answering
//   const [selectedOption, setSelectedOption] = useState(null); // Track selected option

//   // Define questions for each field
//   const questions = {
//     math: [
//       { text: 'What is 2 + 2?', correctAnswer: '4', options: ['3', '4', '5'] },
//       { text: 'What is 3 * 3?', correctAnswer: '9', options: ['6', '9', '12'] }
//     ],
//     coding: [
//       { text: 'What does HTML stand for?', correctAnswer: 'HyperText Markup Language', options: ['HyperText Markup Language', 'HighText Machine Language', 'HyperTool Multi Language'] },
//       { text: 'Which of the following is a JavaScript framework?', correctAnswer: 'React', options: ['Django', 'React', 'Flask'] }
//     ],
//     science: [
//       { text: 'What planet is known as the Red Planet?', correctAnswer: 'Mars', options: ['Earth', 'Mars', 'Jupiter'] },
//       { text: 'What is H2O commonly known as?', correctAnswer: 'Water', options: ['Water', 'Hydrogen Peroxide', 'Salt'] }
//     ]
//   };

//   const handleFieldSelection = (field) => {
//     setSelectedField(field);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setUserAnswers([]);
//     setFeedback(null);
//     setIsAnswered(false);
//     setSelectedOption(null);
//   };

//   const handleAnswer = (option) => {
//     const currentQuestion = questions[selectedField][currentQuestionIndex];

//     // Save user's answer
//     setUserAnswers((prevAnswers) => [
//       ...prevAnswers,
//       {
//         text: currentQuestion.text,
//         yourAnswer: option,
//         correctAnswer: currentQuestion.correctAnswer,
//       }
//     ]);

//     setSelectedOption(option); // Track the selected option

//     // Check if the answer is correct
//     if (option === currentQuestion.correctAnswer) {
//       setScore((prevScore) => prevScore + 1);
//       setFeedback({ correct: true, message: 'Correct!' });
//     } else {
//       setFeedback({ correct: false, message: 'Incorrect! The correct answer is ' + currentQuestion.correctAnswer });
//     }

//     // Disable further answer selection
//     setIsAnswered(true);
//   };

//   const nextQuestion = () => {
//     // Move to the next question or show results
//     if (currentQuestionIndex < questions[selectedField].length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       setFeedback(null);
//       setIsAnswered(false);
//       setSelectedOption(null);
//     } else {
//       // Navigate to the QuizResult page and pass data (score, userAnswers, etc.)
//       navigate('/quiz-result', { 
//         state: { 
//           score, 
//           totalQuestions: questions[selectedField].length, 
//           incorrectQuestions: userAnswers.filter(
//             (answer) => answer.yourAnswer !== answer.correctAnswer
//           )
//         } 
//       });
//     }
//   };

//   return (
//     <div className="quiz-container">
//       {!selectedField ? (
//         <>
//           <h1>Select a Quiz Field</h1>
//           <div className="quiz-field-selection">
//             <button onClick={() => handleFieldSelection('math')}>Math</button>
//             <button onClick={() => handleFieldSelection('coding')}>Coding</button>
//             <button onClick={() => handleFieldSelection('science')}>Science</button>
//           </div>
//         </>
//       ) : (
//         <>
//           <h1>{selectedField.charAt(0).toUpperCase() + selectedField.slice(1)} Quiz</h1>
//           <p>{questions[selectedField][currentQuestionIndex].text}</p>
//           <div className="quiz-options">
//             {questions[selectedField][currentQuestionIndex].options.map((option) => (
//               <button
//                 key={option}
//                 onClick={() => handleAnswer(option)}
//                 disabled={isAnswered}
//                 className={
//                   isAnswered && option === questions[selectedField][currentQuestionIndex].correctAnswer
//                     ? 'correct' // Highlight correct answer in green
//                     : isAnswered && option !== questions[selectedField][currentQuestionIndex].correctAnswer && option === selectedOption
//                     ? 'incorrect' // Highlight selected incorrect answer in red
//                     : isAnswered && option !== selectedOption
//                     ? 'disabled' // Highlight other options as disabled after answering
//                     : ''
//                 }
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//           {/* Feedback message */}
//           {feedback && (
//             <div className={`feedback ${feedback.correct ? 'correct' : 'incorrect'}`}>
//               {feedback.message}
//             </div>
//           )}

//           {/* Show 'Next' button only after answering */}
//           {isAnswered && (
//             <button onClick={nextQuestion}>Next Question</button>
//           )}
//         </>
//       )}
//       <Link to="/home" className="back-to-home">Back to Home</Link>
//     </div>
//   );
// };

// export default Quiz;
//the above one it work

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = {
    math: [
      { text: 'What is 2 + 2?', correctAnswer: '4', options: ['3', '4', '5'] },
      { text: 'What is 3 * 3?', correctAnswer: '9', options: ['6', '9', '12'] }
    ],
    coding: [
      { text: 'What does HTML stand for?', correctAnswer: 'HyperText Markup Language', options: ['HyperText Markup Language', 'HighText Machine Language', 'HyperTool Multi Language'] },
      { text: 'Which of the following is a JavaScript framework?', correctAnswer: 'React', options: ['Django', 'React', 'Flask'] }
    ],
    science: [
      { text: 'What planet is known as the Red Planet?', correctAnswer: 'Mars', options: ['Earth', 'Mars', 'Jupiter'] },
      { text: 'What is H2O commonly known as?', correctAnswer: 'Water', options: ['Water', 'Hydrogen Peroxide', 'Salt'] }
    ]
  };

  const handleFieldSelection = (field) => {
    setSelectedField(field);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setFeedback(null);
    setIsAnswered(false);
    setSelectedOption(null);
  };

  const handleAnswer = (option) => {
    const currentQuestion = questions[selectedField][currentQuestionIndex];

    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        text: currentQuestion.text,
        yourAnswer: option,
        correctAnswer: currentQuestion.correctAnswer,
      }
    ]);

    setSelectedOption(option);

    if (option === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback({ correct: true, message: 'Correct!' });
    } else {
      setFeedback({ correct: false, message: 'Incorrect! The correct answer is ' + currentQuestion.correctAnswer });
    }

    setIsAnswered(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions[selectedField].length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFeedback(null);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      // Storing quiz result in localStorage
      const previousResults = JSON.parse(localStorage.getItem('quizResults')) || [];
      const newResult = {
        field: selectedField,
        score: score + (feedback?.correct ? 1 : 0), // Adjust the score based on the last answer
        totalQuestions: questions[selectedField].length,
        date: new Date().toLocaleString()
      };
      localStorage.setItem('quizResults', JSON.stringify([...previousResults, newResult]));

      // Navigate to Quiz Result
      navigate('/quiz-result', {
        state: {
          score: score + (feedback?.correct ? 1 : 0),
          totalQuestions: questions[selectedField].length,
          incorrectQuestions: userAnswers.filter((answer) => answer.yourAnswer !== answer.correctAnswer)
        }
      });
    }
  };

  return (
    <div className="quiz-container">
      {!selectedField ? (
        <>
          <h1>Select a Quiz Field</h1>
          <div className="quiz-field-selection">
            <button onClick={() => handleFieldSelection('math')}>Math</button>
            <button onClick={() => handleFieldSelection('coding')}>Coding</button>
            <button onClick={() => handleFieldSelection('science')}>Science</button>
          </div>
        </>
      ) : (
        <>
          <h1>{selectedField.charAt(0).toUpperCase() + selectedField.slice(1)} Quiz</h1>
          <p>{questions[selectedField][currentQuestionIndex].text}</p>
          <div className="quiz-options">
            {questions[selectedField][currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className={
                  isAnswered && option === questions[selectedField][currentQuestionIndex].correctAnswer
                    ? 'correct'
                    : isAnswered && option !== questions[selectedField][currentQuestionIndex].correctAnswer && option === selectedOption
                    ? 'incorrect'
                    : isAnswered && option !== selectedOption
                    ? 'disabled'
                    : ''
                }
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && <div className={`feedback ${feedback.correct ? 'correct' : 'incorrect'}`}>{feedback.message}</div>}
          {isAnswered && <button onClick={nextQuestion}>Next Question</button>}
        </>
      )}
      <Link to="/home" className="back-to-home">Back to Home</Link>
    </div>
  );
};

export default Quiz;
