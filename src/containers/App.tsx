import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import CreateEvent from './CreateEvent/CreateEvent';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/CreateEvent" exact component={CreateEvent} />
      </Router>
    </React.Fragment>
  );
};

export default App;
