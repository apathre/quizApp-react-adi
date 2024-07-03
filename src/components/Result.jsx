// src/components/Result.js
import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <div>
      <h2>Thank you for submitting the quiz!</h2>
      <p>Your results will be displayed here.</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Result;
