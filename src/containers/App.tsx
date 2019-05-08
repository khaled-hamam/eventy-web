import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './Login/LoginPage';
import RegistrationPage from './Registration/RegistrationPage';
import EventPage from './EventPage/EventPage';
import RequestPage from './RequestPage/RequestPage';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={RegistrationPage} />
        <Route path="/event/:id" exact component={EventPage} />
        <Route path="/request" exact component={RequestPage} />
      </Router>
    </React.Fragment>
  );
};

export default App;
