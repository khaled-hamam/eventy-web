import React, { Component } from 'react';
import { Button } from 'antd';
import './Navbar.css';
export class NavBar extends Component {
  render() {
    return (
      <nav className="d-flex align-items-center py-2 px-4">
        <h3 className="logo flex-grow-1">Eventy</h3>
        <div className="">
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
