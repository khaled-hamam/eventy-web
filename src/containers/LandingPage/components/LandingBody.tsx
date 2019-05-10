import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './LandingBody.css';

export class LandingBody extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center h-100 content">
        <h3 className="font-weight-light slogan">WE CREATE</h3>
        <h1 className="font-weight-bold slogan">YOU CELEBRATE</h1>
        <Button className="eventy-btn" shape="round" type="primary">
          <Link to="/CreateEvent">CREATE EVENT NOW</Link>
        </Button>
      </div>
    );
  }
}
