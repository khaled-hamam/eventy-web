import { EventPlanner } from './EventPlanner';
import { User } from './User';

export enum EventOptions {
  DJ,
  Photographer,
  Decoration,
  Catering,
}

export interface ILocation {
  latitude: string;
  longitude: string;
}
export interface Event {
  id: number;
  name: string;
  description: string;
  date: Date;
  latitude: string;
  longitude: string;
  type: string;
  budget: number;
  attendeesLimit: number;
  eventOptions: EventOptions[];
  creator: User;
  planner: EventPlanner;
  photosURL: string[];
}
