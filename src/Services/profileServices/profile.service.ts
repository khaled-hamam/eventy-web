import { EditProfileDTO } from './dto/editProfile.dto';
import axios from 'axios';

export class ProfileService {
  public async getCreatorProfile(username: String): Promise<any> {
    return await axios.get(`/profiles/${username}`);
  }

  public async editProfile(editedProfile: EditProfileDTO) {
    await axios.put(`/profiles/`, editedProfile);
  }
}
