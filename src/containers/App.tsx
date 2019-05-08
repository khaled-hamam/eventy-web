import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './Login/LoginPage';
import RegistrationPage from './Registration/RegistrationPage';
import EventPage from './EventPage/EventPage';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={RegistrationPage} />
        <Route path="/event/:id" exact component={EventPage} />
      </Router>
    </React.Fragment>
  );
};

export default App;
