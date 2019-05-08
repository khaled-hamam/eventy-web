import React, { Component } from 'react';
import { Button } from 'antd';
import './LandingBody.css';
export class LandingBody extends Component {
  render() {
    return (
      <div className="row d-flex flex-column align-items-center h-100 content">
        <h3>WE CREATE</h3>
        <h1>YOU CELEBRATE</h1>
        <Button className="create" shape="round">
          CREATE EVENT NOW
        </Button>
      </div>
    );
  }
}
