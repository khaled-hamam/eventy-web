import React, { Component } from 'react';
import { EventForm } from './components/EventForm';
import './CreateEvent.css';
import { Navbar } from './components/Navbar';
export default class CreateEvent extends Component {
  render() {
    return (
      <div className="backgroundColor">
        <div className="backgroundNav">
          <Navbar />
        </div>
        <div className="header-position header">
          <h3>CREATE EVENT</h3>
        </div>
        <div className="position">
          <EventForm />
        </div>
      </div>
    );
  }
}
