import { EventPlanner } from './EventPlanner';
import { User } from './User';

export interface Event {
  id: number;
  name: string;
  description: string;
  date: Date;
  // location: ILocation;
  type: string;
  budget: number;
  attendeesLimit: number;
  // eventOptions: EventOptions[];
  creator: User;
  planner: EventPlanner;
  photosURL: string[];
}
