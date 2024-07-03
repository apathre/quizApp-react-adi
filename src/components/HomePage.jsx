// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import QuizList from './QuizList';

const HomePage = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <QuizList />
    </div>
  );
};

export default HomePage;
