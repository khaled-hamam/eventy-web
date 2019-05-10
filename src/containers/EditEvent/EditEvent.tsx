import React, { Component } from 'react';
import EditForm from './components/EditForm';
import './EditEvent.css';

interface IEditEventProps {
  form: any;
}

interface IEditEventState {}
export default class EditEvent extends Component<IEditEventProps, IEditEventState> {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <EditForm />
      </div>
    );
  }
}
