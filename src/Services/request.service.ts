import axios from 'axios';
import { message } from 'antd';
import { Request } from './../dtos/Request';

export class RequestService {
  public async getRequests(): Promise<Request[]> {
    try {
      const res = await axios.post<Request[]>('/requests');
      return res.data;
    } catch (error) {
      console.log(error);
      message.error('An error occurred.');
      return [];
    }
  }

  public async acceptRequest(id: number) {
    return await axios.get(`/requests/${id}/accept`);
  }

  public async rejectRequest(id: number) {
    return await axios.get(`/requests/${id}/reject`);
  }
}
