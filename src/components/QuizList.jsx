// src/components/QuizList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../data/dummyData.json';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quizzes from Google Sheets or use dummyData
    setQuizzes(dummyData.quizzes);
  }, []);

  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
