import { EditProfileDTO } from './dto/editProfile.dto';
import axios from 'axios';

export class ProfileService {
  public async getCreatorProfile(username: String): Promise<any> {
    return await axios.get(`/profiles/${username}`);
  }

  public async editProfile(editedProfile: EditProfileDTO) {
    await axios.put('/profiles', editedProfile, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoicGxhbm5lciIsInVzZXJuYW1lIjoiS2FyaW1fQWJkZWxnaGFmZmFyciIsImZ1bGxOYW1lIjoiS2FyaW0gRUxzYXllZCBBYmRlbGdoYWZmYXIiLCJlbWFpbCI6ImthcmltLmFiZGVsZ2hhZmZhcnI5OEBnbWFpbC5jb20iLCJpYXQiOjE1NTczMzE0Mjh9.5cNYoiiQHOY5yXCp-_g97KFzjVoszAG2_wIf7dU8dWk',
      },
    });
  }
}
