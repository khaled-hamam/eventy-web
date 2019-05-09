import { Event } from './Event';
import { EventPlanner } from './EventPlanner';
import { RequestState } from './RequestState.enum';
export interface Request {
  event: Event;
  planner: EventPlanner;
  state: RequestState;
}
