import React, { Component } from 'react';
import { Button } from 'antd';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a> Eventy</a>
        <div className="d-flex flex-row-reverse">
          <Button type="link">LOGIN</Button>
          <Button type="danger">REGISTER</Button>
        </div>
      </nav>
    );
  }
}
