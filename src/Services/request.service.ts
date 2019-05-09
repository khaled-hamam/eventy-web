import axios from 'axios';

export class RequestService {
  public async acceptRequest(id: number) {
    return await axios.get(`/requests/${id}/accept`);
  }

  public async rejectRequest(id: number) {
    return await axios.get(`/requests/${id}/reject`);
  }
}
