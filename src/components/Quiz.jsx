// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import dummyData from '../data/dummyData.json';

const Quiz = () => {
  const { id } = useParams();
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setQuizData(dummyData.quizzes.find((q) => q.id === id).questions);
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [id]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prev) => [...prev, answer]);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      history.push('/result');
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      <p>Time Elapsed: {timeElapsed}s</p>
      {quizData.length > 0 && currentQuestionIndex < quizData.length && (
        <div>
          <p>{quizData[currentQuestionIndex].question}</p>
          {quizData[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelect(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
