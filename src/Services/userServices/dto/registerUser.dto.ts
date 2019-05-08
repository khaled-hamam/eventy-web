export class RegisterDTO {
  public fullName: string;

  public email: string;
  public username: string;

  public password: string;

  public mobile: string;
  public role: 'planner' | 'creator';
}
