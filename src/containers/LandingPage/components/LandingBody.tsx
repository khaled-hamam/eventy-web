import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './LandingBody.css';
import { UserService } from '../../../services/userServices/user.service';
interface ILandingBodyState {
  isCreator: boolean;
}

export class LandingBody extends Component<{}, ILandingBodyState> {
  constructor(props: any) {
    super(props);

    this.state = { isCreator: false };
  }
  async componentDidMount() {
    if (UserService.instance.user.value) {
      if (UserService.instance.user.value.role === 'creator') {
        this.setState({ isCreator: false });
      } else this.setState({ isCreator: true });
    }
  }
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center h-100 content">
        <h3 className="font-weight-light slogan">WE CREATE</h3>
        <h1 className="font-weight-bold slogan">YOU CELEBRATE</h1>
        <Button className="eventy-btn" shape="round" type="primary">
          <Link hidden={this.state.isCreator} to="/create-event">
            CREATE EVENT NOW
          </Link>
          <Link hidden={!this.state.isCreator} to="/request">
            VIEW PENDING REQUESTS
          </Link>
        </Button>
      </div>
    );
  }
}
