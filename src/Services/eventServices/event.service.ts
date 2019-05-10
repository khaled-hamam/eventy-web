import { CreateEventDTO } from './dto/CreateEvent.dto';
import axios from 'axios';
import { EditEventDTO } from './dto/EditEvent.dto';

export class EventService {
  public async getEvent(id: number) {
    return await axios.get(`/events/${id}`);
  }

  public async create(createEventDTO: CreateEventDTO): Promise<number | undefined> {
    try {
      const res = await axios.post('/events/create', createEventDTO);
      return res.data.id;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async update(editEventDTO: EditEventDTO) {
    await axios.put('/events/:id', editEventDTO);
  }
}
