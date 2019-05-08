import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import CreateEvent from './CreateEvent/CreateEvent';
import EditEvent from './EditEvent/EditEvent';
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/CreateEvent" exact component={CreateEvent} />
        <Route path="/EditEvent" exact component={EditEvent} />
      </Router>
    </React.Fragment>
  );
};

export default App;
