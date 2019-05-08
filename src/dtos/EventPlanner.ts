import { Event } from './Event';
import { User } from './User';

export interface EventPlanner extends User {
  rating: number;
  // events?: Event[];
  // pendingRequests: Request[];
}
