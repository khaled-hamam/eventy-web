import { Event } from './Event';

export interface Profile {
  username: string;
  email: string;
  fullName: string;
  mobile: string;
  pictureURL: string;
  events: Event[];
  rating?: number;
  role: 'planner' | 'creator';
}
