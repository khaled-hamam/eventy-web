import { ILocation, EventOptions } from './CreateEvent.dto';

export class EditEventDTO {
  public name: string;
  public description: string;
  public location: ILocation;
  public budget: number;
  public attendeesLimit: number;
  public eventOptions: EventOptions[];
}
