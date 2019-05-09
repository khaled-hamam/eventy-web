import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Logo extends Component {
  render() {
    return (
      <h3 className="logo flex-grow-1 py-2 px-4">
        <Link to="/">Eventy</Link>
      </h3>
    );
  }
}
