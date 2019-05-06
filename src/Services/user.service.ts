import axios from 'axios';

export class UserService {
  public async login(loginDTO: LoginDTO) {
    await axios.post('/users/login', loginDTO);
  }
}
