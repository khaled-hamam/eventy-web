import React, { Component } from 'react';
import { Avatar, Button } from 'antd';
import { Profile } from '../../dtos/Profile';
import ProfileDetail from './components/ProfileDetail';

interface IProfileState {
  profile: Profile;
}

interface IProfileProps {}

export default class ProfilePage extends Component<IProfileProps, IProfileState> {
  constructor(props: IProfileProps) {
    super(props);
    this.state = {
      profile: {
        username: 'Khaled',
        email: 'Khaled@gmail.com',
        fullName: 'Khaled Mohamed',
        mobile: '01014740966',
        pictureURL:
          'https://thenypost.files.wordpress.com/2019/04/mohamed-salah.jpg?quality=90&strip=all&w=618&h=410&crop=1',
        events: [],
        role: 'creator',
      },
    };
  }

  componentDidMount() {
    // TODO: Fetch Profile Date
  }

  render() {
    const { profile } = this.state;

    return (
      <div className="d-flex justify-content-center px-5 h-100">
        <div className="d-flex flex-basis-20 flex-column h-100">
          <Avatar shape="square" size={200} src={profile.pictureURL} />
          <hr />
          <ProfileDetail header="Email" value={profile.email} />
          <ProfileDetail header="Mobile" value={profile.mobile} />
          <ProfileDetail header="Role" value={profile.role} />
        </div>
        <div className="d-flex flex-basis-80 bg-light p-5">
          <div className="d-flex">
            <h3>{profile.fullName}</h3>
            <Button />
          </div>
        </div>
      </div>
    );
  }
}
