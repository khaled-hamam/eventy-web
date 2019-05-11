import React, { Component } from 'react';
import { Request } from '../../dtos/Request';
import { RequestService } from '../../services/request.service';
import { RequestCard } from './components/RequestCard';
interface IRequestState {
  requests: Request[];
}

export default class RequestPage extends Component<{}, IRequestState> {
  private _requestService: RequestService;

  constructor(props: any) {
    super(props);
    this.state = {
      requests: [],
    };
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
    // const e = await this._requestService.getRequest();
    // await this.setState({ request: e.data });
    // console.log('***********', this.state.request);

    const requests = await this._requestService.getRequests();
    await this.setState({ requests });
  }

  render() {
    return (
      <div style={{ margin: '5%' }} className="d-flex align-items-center justify-content-center flex-column">
        <h1 style={{ font: 'bold' }}>Pending Requests</h1>
        {this.state.requests.map(req => (
          <RequestCard title={req.event.name} value={req.event.creator.fullName || ''} />
        ))}
      </div>
    );
  }
}
