// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuizDetails from './components/QuizDetails';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/quiz/:id" component={QuizDetails} />
        <Route path="/quiz/:id/start" component={Quiz} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
  );
};

export default App;
