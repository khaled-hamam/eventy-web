import React, { Component } from 'react';
import EditForm from './components/EditForm';
import { Navbar } from './components/Navbar';
import './EditEvent.css';
interface IEditEventProps {
  form: any;
}

interface IEditEventState {}
export default class EditEvent extends Component<IEditEventProps, IEditEventState> {
  render() {
    return (
      <div className="backgroundColor">
        <div className="backgroundNav">
          <Navbar />
        </div>
        <div className="position">
          <EditForm />
        </div>
      </div>
    );
  }
}
