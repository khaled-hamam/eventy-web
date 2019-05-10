import React, { Component } from 'react';
import { Request } from '../../dtos/Request';
import { RequestService } from '../../services/request.service';
import RequestCard from './components/RequestCard';
import { Button } from 'antd';
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

  async componentDidMount() {
    // const e = await this._requestService.getRequest();
    // await this.setState({ request: e.data });
    // console.log('***********', this.state.request);

    const requests = await this._requestService.getRequests();
    await this.setState({ requests });
  }
  accept = async (id: number) => {
    await this._requestService.acceptRequest(id);

    this.setState(state => {
      return {
        requests: this.state.requests.filter(req => req.id !== id),
      };
    });
  };

  reject = async (id: number) => {
    await this._requestService.rejectRequest(id);
    this.setState(state => {
      return {
        requests: this.state.requests.filter(req => req.id !== id),
      };
    });
  };

  render() {
    return (
      <div style={{ margin: '5%' }} className="d-flex align-items-center justify-content-center flex-column">
        <h1 style={{ font: 'bold' }}>Pending Requests</h1>
        {this.state.requests.map(req => (
          <div>
            <RequestCard
              eventId={req.event.id}
              creatorName={req.event.creator.fullName}
              creatorUserName={req.event.creator.username}
              eventName={req.event.name}
            />

            <div className="d-flex requestAction align-items-center justify-content-center">
              <Button
                style={{ minWidth: '15%', marginRight: '10%', color: 'green' }}
                onClick={() => this.accept(req.id)}
              >
                ACCEPT
                <i className="fas fa-check" />
              </Button>
              <Button style={{ minWidth: '15%', color: 'red' }} onClick={() => this.reject(req.id)}>
                REJECT
                <i className="fas fa-times" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
