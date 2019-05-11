import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import ProfilePage from './Profile/ProfilePage';
import CreateEvent from './CreateEvent/CreateEvent';
import EditEvent from './EditEvent/EditEvent';
import LoginPage from './Login/LoginPage';
import RegistrationPage from './Registration/RegistrationPage';
import EditProfile from './Profile/EditProfile';
import EventPage from './EventPage/EventPage';
import RequestPage from './RequestPage/RequestPage';
import { NavBar } from '../components/Navbar/Navbar';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Route path="/" exact component={LandingPage} />
          <PrivateRoute path="/create-event" exact component={CreateEvent} />
          <PrivateRoute path="/edit-event" exact component={EditEvent} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegistrationPage} />
          <PrivateRoute path="/editProfile" exact component={EditProfile} />
          <Route path="/register" exact component={RegistrationPage} />
          <Route path="/event/:id" exact component={EventPage} />
          <PrivateRoute path="/request" exact component={RequestPage} />
          <Route path="/profile/:username" exact component={ProfilePage} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
