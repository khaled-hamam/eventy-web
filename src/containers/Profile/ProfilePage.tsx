import React, { Component } from 'react';
import { Avatar, Button, Rate } from 'antd';
import { Profile } from '../../dtos/Profile';
import ProfileDetail from './components/ProfileDetail';
import { Link, RouteComponentProps } from 'react-router-dom';
import './ProfilePage.css';
import { ProfileService } from '../../services/profileServices/profile.service';
import { UserService } from '../../services/userServices/user.service';

type MixedPropType = RouteComponentProps<{ username: string }> & RouteComponentProps<any>;

interface IProfileState {
  profile?: Profile;
}

interface IProfileProps extends MixedPropType {}

export default class ProfilePage extends Component<IProfileProps, IProfileState> {
  isProfile: boolean;
  private profileService: ProfileService;

  constructor(props: IProfileProps) {
    super(props);
    this.state = {
      profile: undefined,
    };

    this.profileService = new ProfileService();
  }

  async componentDidMount() {
    const result = await this.profileService.getCreatorProfile(this.props.match.params.username);
    this.setState({ profile: result.data });
  }

  render() {
    const { profile } = this.state;
    if (!profile) {
      return <div>Loading...</div>;
    }
    if (UserService.instance.user.value)
      this.isProfile = UserService.instance.user.value.username === profile.username;
    return (
      <div className="d-flex justify-content-center px-5 h-100">
        <div className="d-flex flex-basis-20 flex-column h-100">
          <Avatar shape="square" size={200} src={profile.pictureURL} icon="user" />
          <hr />
          <ProfileDetail header="Email" value={profile.email} />
          <ProfileDetail header="Mobile" value={profile.mobile} />
          <ProfileDetail header="Role" value={profile.rating !== undefined ? 'Planner' : 'Creator'} />
        </div>
        <div className="d-flex flex-basis-80 bg-light p-5 flex-column">
          <div className="d-flex justify-content-between">
            <h3>{profile.fullName}</h3>
            <Button hidden={!this.isProfile} type="primary">
              <Link to={`/profile/${profile.username}/edit`}>Edit Profile</Link>
            </Button>
          </div>
          {profile.rating !== undefined && <Rate value={profile.rating} />}
          {profile.rating !== undefined ? (
            <h5 className="mt-4">Events Planned</h5>
          ) : (
            <h5 className="mt-4">Events Created</h5>
          )}
          {profile.events.map(event => (
            <div className="d-felx">
              <h6>
                <Link to={`/event/${event.id}`}>{event.name}</Link>
              </h6>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
