import axios from 'axios';

export class EventService {
  public async getEvent(id: number) {
    return await axios.get(`/events/${id}`);
  }
}
