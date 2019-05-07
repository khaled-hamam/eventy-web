import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './Login/LoginPage';
import RegistrationPage from './Registration/RegistrationPage';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/landingPage" exact component={LandingPage} />
      </Router>
    </React.Fragment>
  );
};

export default App;
