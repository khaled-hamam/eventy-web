export interface User {
  username: string;
  email: string;
  fullName: string;
  password: string;
  mobile?: string;
  pictureURL?: string;
  events?: Event[];
}
