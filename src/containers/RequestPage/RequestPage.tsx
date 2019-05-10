import React, { Component } from 'react';
import { Request } from '../../dtos/Request';
import { RequestService } from '../../services/request.service';
import { RequestCard } from './components/RequestCard';
interface IRequestState {
  request: Request[];
}
export default class RequestPage extends Component<{}, IRequestState> {
  private _requestService: RequestService;

  constructor(props: any) {
    super(props);
    this._requestService = new RequestService();
  }

  async componentDidMount() {
    // const e = await this._requestService.getRequest();
    // await this.setState({ request: e.data });
    // console.log('***********', this.state.request);
  }
  render() {
    return (
      <div style={{ margin: '5%' }} className="d-flex align-items-center justify-content-center flex-column">
        <h1 style={{ font: 'bold' }}>Pending Requests</h1>
        {this.state.request.map(req => (
          <RequestCard title={req.event.name} value={req.event.creator.fullName} />
        ))}
      </div>
    );
  }
}
