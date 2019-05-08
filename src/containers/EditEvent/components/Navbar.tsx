import React, { Component } from 'react';
import { Button } from 'antd';
import './Navbar.css';
export class Navbar extends Component {
  render() {
    return (
      <nav className="d-flex align-items-center py-2 px-4">
        <h3 className="logo flex-grow-1">Eventy</h3>

        <Button className="profile">Profile</Button>
      </nav>
    );
  }
}
