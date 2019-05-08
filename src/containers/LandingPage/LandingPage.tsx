import React, { Component } from 'react';
import { NavBar } from './components/Navbar';
import { LandingBody } from './components/LandingBody';
import './LandingPage.css';
export default class LandingPage extends Component {
  render() {
    return (
      <div className="background">
        <NavBar />
        <LandingBody />
      </div>
    );
  }
}
