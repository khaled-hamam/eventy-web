import { LoginDTO } from './dto/LoginUser.dto';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { RegisterDTO } from './dto/registerUser.dto';
import { Observable } from '../../utils/Observable';
import { UserToken } from './dto/user-token.dto';
import { message } from 'antd';

export class UserService {
  public user: Observable<UserToken | undefined>;
  private static _instance: UserService;
  public static get instance(): UserService {
    if (this._instance === undefined) {
      this._instance = new UserService();
    }
    return this._instance;
  }

  private constructor() {
    this.user = new Observable();
  }

  public async login(loginDTO: LoginDTO): Promise<boolean> {
    try {
      const res = await axios.post('/users/login', loginDTO);
      localStorage.setItem('token', res.data.token);
      this.decodeToken(res.data.token);
      message.success('Welcome Back 👋');
      return true;
    } catch (error) {
      console.log(error);
      message.error('Invalid email or password.');
      return false;
    }
  }

  public async register(registerDTO: RegisterDTO): Promise<boolean> {
    try {
      await axios.post('/users/register', registerDTO);
      message.success('Now You are ready to login 😎');
      return true;
    } catch (error) {
      console.log(error);
      message.error('Invalid Data.');
      return false;
    }
  }

  public async logout() {
    this.user.next(undefined);
    localStorage.removeItem('token');
  }

  public async checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.decodeToken(token);
    }
  }

  private decodeToken(token: string) {
    const decoded = jwt_decode<UserToken>(token);
    this.user.next(decoded);
    axios.defaults.headers.authorization = `Bearer ${token}`;
  }
}
