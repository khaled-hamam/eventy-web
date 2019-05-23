import React, { Component } from 'react';
import '../Forms.css';
import { Logo } from '../../components/Logo';
import LoginForm from '../../components/LoginForm';
interface ILoginProps {}

interface ILoginState {}

export default class LoginPage extends Component<ILoginProps, ILoginState> {
  render() {
    return (
      <div className="d-flex h-100">
        <div className="fixed">
          <Logo />
        </div>
        <div className="d-flex justify-content-center align-items-center h-100" />
        <LoginForm />
      </div>
    );
  }
}
