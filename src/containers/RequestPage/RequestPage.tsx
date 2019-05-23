import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { Request } from '../../dtos/Request';
import { RequestService } from '../../services/request.service';

interface IRequestState {
  request?: Request[];
}
export default class RequestPage extends Component<{}, IRequestState> {
  private _requestService: RequestService;

  constructor(props: any) {
    super(props);
    this._requestService = new RequestService();
  }
  accept = () => {
    // await this._requestService.acceptRequest(id);
    console.log('accept');
  };
  reject = () => {
    // await this._requestService.rejectRequest(id);

    console.log('reject');
  };
  async componentDidMount() {
    const e = await this._requestService.getRequest();
    await this.setState({ request: e.data });
    console.log('***********', this.state.request);
  }
  render() {
    return (
      <div style={{ margin: '5%' }} className="d-flex align-items-center justify-content-center flex-column">
        <h1 style={{ font: 'bold' }}>Pending Requests</h1>
        {/* {this.state.request.map(req => ( */}
        <Card
          className="w-50"
          title={
            <h2>
              <a href="/event/${req.event.id}">Event Name: </a>
            </h2>
          }
        >
          Event Creator Name: <a href="/LandingPage"> Name </a>
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
        {/* // ))} */}
      </div>
    );
  }
}
