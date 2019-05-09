export interface UserToken {
  username: string;
  email: string;
  fullName: string;
  role: 'creator' | 'planner';
}
