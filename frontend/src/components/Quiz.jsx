
//try quiz



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    reactDevelopment: [
      { text: 'What is the primary purpose of React?', correctAnswer: 'Building user interfaces', options: ['Building user interfaces', 'Managing server-side logic', 'Handling database queries'] },
      { text: 'What hook is used to manage state in functional components?', correctAnswer: 'useState', options: ['useEffect', 'useContext', 'useState'] },
      { text: 'Which of the following is a lifecycle method in class components?', correctAnswer: 'componentDidMount', options: ['componentDidMount', 'useEffect', 'render'] },
    ],
    javascriptBasics: [
      { text: 'What does the "var" keyword do in JavaScript?', correctAnswer: 'Declares a variable', options: ['Declares a variable', 'Creates a function', 'Defines a class'] },
      { text: 'Which of the following is not a data type in JavaScript?', correctAnswer: 'Character', options: ['String', 'Number', 'Character'] },
      { text: 'What is the output of "5" + 5?', correctAnswer: '55', options: ['10', '55', 'Error'] },
    ],
    cssMastery: [
      { text: 'What does CSS stand for?', correctAnswer: 'Cascading Style Sheets', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'] },
      { text: 'Which property is used to change the font of an element?', correctAnswer: 'font-family', options: ['font-weight', 'font-style', 'font-family'] },
      { text: 'How do you select an element with the id "header" in CSS?', correctAnswer: '#header', options: ['#header', '.header', 'header'] },
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

      // Increment the completed quizzes count
      handleQuizCompletion();  // <- Call this function to update completed quizzes count

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

  // Update localStorage when a quiz is completed
  const handleQuizCompletion = () => {
    // Retrieve the current number of completed quizzes from localStorage
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || 0;
    
    // Increment the number of completed quizzes
    const newQuizCount = completedQuizzes + 1;
    
    // Update localStorage with the new value
    localStorage.setItem('completedQuizzes', JSON.stringify(newQuizCount));
  };

  return (
    <div className="quiz-container">
      {!selectedField ? (
        <>
          <h1>Select a Quiz Field</h1>
          <div className="quiz-field-selection">
            <button onClick={() => handleFieldSelection('reactDevelopment')}>React Development</button>
            <button onClick={() => handleFieldSelection('javascriptBasics')}>JavaScript Basics</button>
            <button onClick={() => handleFieldSelection('cssMastery')}>CSS Mastery</button>
          </div>
        </>
      ) : (
        <>
          <h1>{selectedField.charAt(0).toUpperCase() + selectedField.slice(1).replace(/([A-Z])/g, ' $1')} Quiz</h1>
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
      {/* <Link to="/" className="back-button">Back to Home</Link> */}

      <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>

    </div>
  );
};

export default Quiz;
