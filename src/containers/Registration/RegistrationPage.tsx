import React, { Component } from 'react';

import { UserService } from '../../Services/userServices/user.service';
import { Logo } from '../../components/Logo';
import RegisterForm from '../../components/RegisterForm';
import '../Forms.css';

interface IRegistrationProps {
  form: any;
}

interface IRegistrationState {}

export default class RegistrationPage extends Component<IRegistrationProps, IRegistrationState> {
 
  render() {
    return (
      <div className="d-flex h-100">
        <div className="fixed">
          <Logo />
        </div>
        <div className="d-flex justify-content-center align-items-center h-100 " />
        <RegisterForm />
      </div>
    );
  }
}
