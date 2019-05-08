import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ProfilePage from './Profile/ProfilePage';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/profile/:username" exact component={ProfilePage} />
      </Router>
    </React.Fragment>
  );
};

export default App;
