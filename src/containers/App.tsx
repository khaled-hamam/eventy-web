import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import CreateEvent from './CreateEvent/CreateEvent';
import EditEvent from './EditEvent/EditEvent';
import LoginPage from './Login/LoginPage';
import RegistrationPage from './Registration/RegistrationPage';
import EditProfile from './Profile/EditProfile';
import EventPage from './EventPage/EventPage';
import RequestPage from './RequestPage/RequestPage';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/CreateEvent" exact component={CreateEvent} />
        <Route path="/EditEvent" exact component={EditEvent} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/landingPage" exact component={LandingPage} />
        <Route path="/editProfile" exact component={EditProfile} />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/event/:id" exact component={EventPage} />
        <Route path="/request" exact component={RequestPage} />
      </Router>
    </React.Fragment>
  );
};

export default App;
