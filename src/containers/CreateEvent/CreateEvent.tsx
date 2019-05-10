import React, { Component } from 'react';
import EventForm from './components/EventForm';
import './CreateEvent.css';

interface ICreateEventProps {
  form: any;
}

interface ICreateEventState {}

export default class CreateEvent extends Component<ICreateEventProps, ICreateEventState> {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <EventForm />
      </div>
    );
  }
}
