import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import ProfilePage from './Profile/ProfilePage';
import CreateEvent from './CreateEvent/CreateEvent';
import EditEvent from './EditEvent/EditEvent';
import LoginPage from './Login/LoginPage';
import RegistrationPage from './Registration/RegistrationPage';
import EditProfile from './Profile/EditProfile';
import EventPage from './EventPage/EventPage';
import RequestPage from './RequestPage/RequestPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Navbar from '../components/Navbar/Navbar';
import { UserService } from '../services/userServices/user.service';
import Page404 from './404/404Page';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    UserService.instance.user.subscribe(user => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegistrationPage} />
            <React.Fragment>
              <Navbar user={this.state.user} />
              <Route path="/" exact component={LandingPage} />
              <PrivateRoute path="/create-event" exact component={CreateEvent} />
              <PrivateRoute path="/edit-event" exact component={EditEvent} />
              <PrivateRoute path="/editProfile" exact component={EditProfile} />
              <Route path="/register" exact component={RegistrationPage} />
              <Route path="/event/:id" exact component={EventPage} />
              <PrivateRoute path="/request" exact component={RequestPage} />
              <Route path="/profile/:username" exact component={ProfilePage} />
              <Route path="/page404" exact component={Page404} />
            </React.Fragment>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
