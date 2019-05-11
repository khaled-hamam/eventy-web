import React, { Component } from 'react';
import EditProfileForm from './components/EditProfileForm';

export default class EditProfile extends Component {
  render() {
    return (
      <div className="container d-flex h-100">
        <div className="col-md-3">
          <h1>Edit Profile</h1>
          <div className="text-center">
            <img src="https://img.rasset.ie/000fc0a3-500.jpg" className="img-thumbnail" alt="avatar" />
          </div>
        </div>
        <div className="col-md-9 personal-info p-5 h-100">
          <h2 className="">Personal info</h2>
          <EditProfileForm />
        </div>
      </div>
    );
  }
}
