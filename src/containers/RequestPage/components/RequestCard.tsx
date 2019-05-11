import React, { Component } from 'react';
import { Card, Button } from 'antd';

interface IRequestCardProps {
  title: string;
  value: string;
}

export class RequestCard extends Component<IRequestCardProps, {}> {
  accept = () => {
    // await this._requestService.acceptRequest(id);
    console.log('accept');
  };
  reject = () => {
    // await this._requestService.rejectRequest(id);

    console.log('reject');
  };
  render() {
    return (
      <Card
        className="w-50"
        title={
          <h2>
            <a href="/event/">Event Name:{`${this.props.title}`} </a>
          </h2>
        }
      >
        Event Creator Name: <a href="/LandingPage"> Name: {`${this.props.value}`} </a>
        <br />
        <br />
        <div className="d-flex requestAction align-items-center justify-content-center">
          <Button style={{ minWidth: '15%', marginRight: '10%', color: 'green' }} onClick={this.accept}>
            ACCEPT
            <i className="fas fa-check" />
          </Button>
          <Button style={{ minWidth: '15%', color: 'red' }} onClick={this.reject}>
            REJECT
            <i className="fas fa-times" />
          </Button>
        </div>
      </Card>
    );
  }
}
