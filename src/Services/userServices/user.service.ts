import { LoginDTO } from './dto/LoginUser.dto';
import axios from 'axios';
import { RegisterDTO } from './dto/registerUser.dto';

export class UserService {
  public async login(loginDTO: LoginDTO) {
    const res = await axios.post('/users/login', loginDTO);
  }

  public async register(registerDTO: RegisterDTO) {
    console.log(registerDTO);
    await axios.post('/users/register', registerDTO);
  }
}
