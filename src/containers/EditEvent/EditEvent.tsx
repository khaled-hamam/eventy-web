import React, { Component } from 'react';
import { EditForm } from './components/EditForm';
import { Navbar } from './components/Navbar';
import './EditEvent.css';

export default class EditEvent extends Component {
  render() {
    return (
      <div className="backgroundColor">
        <div className="backgroundNav">
          <Navbar />
        </div>
        <div className="header-position header">
          <h3>EDIT EVENT</h3>
        </div>
        <div className="position">
          <EditForm />
        </div>
      </div>
    );
  }
}
