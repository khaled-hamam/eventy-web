import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={LandingPage} />
      </Router>
    </React.Fragment>
  );
};

export default App;
