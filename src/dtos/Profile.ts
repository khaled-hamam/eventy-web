export interface Profile {
  username: string;
  email: string;
  fullName: string;
  mobile: string;
  pictureURL: string;
  events: Event[];
  role: 'planner' | 'creator';
}
