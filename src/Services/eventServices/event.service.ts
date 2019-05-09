import { CreateEventDTO } from './dto/CreateEvent.dto';
import axios from 'axios';
import { EditEventDTO } from './dto/EditEvent.dto';

export class EventService {
  public async getEvent(id: number) {
    return await axios.get(`/events/${id}`);
  }
  public async create(createEventDTO: CreateEventDTO) {
    console.log(createEventDTO);
    await axios.post('/events/create', createEventDTO);
  }

  public async update(editEventDTO: EditEventDTO) {
    await axios.put('/events/:id', editEventDTO);
  }
}
