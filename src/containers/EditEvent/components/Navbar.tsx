import React, { Component } from 'react';
import { Button } from 'antd';
import './Navbar.css';
import { Logo } from '../../../components/Logo';

export class Navbar extends Component {
  render() {
    return (
      <nav className="d-flex align-items-center py-2 px-4">
        <Logo />
        <Button className="profile">Profile</Button>
        <Button className="logout">LOGOUT</Button>
      </nav>
    );
  }
}
