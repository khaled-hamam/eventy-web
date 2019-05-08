import React, { Component } from 'react';
import EventForm from './components/EventForm';
import './CreateEvent.css';
import { Navbar } from './components/Navbar';

interface ICreateEventProps {
  form: any;
}

interface ICreateEventState {}
export default class CreateEvent extends Component<ICreateEventProps, ICreateEventState> {
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
