import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <div className="Login">
        <form action="#">
          <h1>Sign in</h1>
        </form>
      </div>
    );
  }
}
