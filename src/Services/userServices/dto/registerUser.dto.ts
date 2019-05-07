export class RegisterDTO {
  public fullName: string | undefined;

  public email: string | undefined;
  public username: string | undefined;

  public password: string | undefined;

  public mobile: string | undefined;
  public role: 'planner' | 'creator' | undefined;
}
