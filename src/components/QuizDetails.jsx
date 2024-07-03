// src/components/QuizDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import dummyData from '../data/dummyData.json';

const QuizDetails = () => {
  const { id } = useParams();
  const quiz = dummyData.quizzes.find((q) => q.id === id);

  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>
      <Link to={`/quiz/${id}/start`}>
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default QuizDetails;
