import React, { Component } from 'react';
import { Button } from 'antd';
import './Navbar.css';
import { Logo } from '../../../components/Logo';
export class NavBar extends Component {
  render() {
    return (
      <nav className="d-flex align-items-center">
        <Logo />
        <div className="py-2 px-4">
          <Button className="mr-2 login" type="link">
            LOGIN
          </Button>
          <Button className="register" type="primary">
            REGISTER
          </Button>
        </div>
      </nav>
    );
  }
}
