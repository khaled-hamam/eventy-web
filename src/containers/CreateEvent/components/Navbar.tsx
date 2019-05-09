import React, { Component } from 'react';
import { Button } from 'antd';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Logo } from '../../../components/Logo';
export class Navbar extends Component {
  render() {
    return (
      <nav className="d-flex align-items-center py-2 px-4">
        <Logo />
        <Button className="profile">
          <Link to="editProfile">Profile</Link>
        </Button>
        <Button className="logout">
          <Link to="/">Logout</Link>
        </Button>
      </nav>
    );
  }
}
