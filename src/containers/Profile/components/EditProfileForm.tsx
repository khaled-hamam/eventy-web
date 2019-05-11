import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

import { ProfileService } from '../../../services/profileServices/profile.service';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Profile } from '../../../dtos/Profile';
import { UserService } from '../../../services/userServices/user.service';
interface IEditProfileProps {
  form?: any;
}
interface IEditProfileState {
  profile?: Profile;
}
type MixedPropType = RouteComponentProps<{ username: string }> & RouteComponentProps<any>;

interface IEditProfileProps extends MixedPropType {}

class EditProfileForm extends Component<IEditProfileProps, IEditProfileState> {
  private profileService: ProfileService;
  constructor(props: any) {
    super(props);
    this.profileService = new ProfileService();
    this.state = {
      profile: undefined,
    };
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    console.log(formData);
    this.profileService.editProfile(formData);
  };
  async componentDidMount() {
    const p = await this.profileService.getCreatorProfile(this.props.match.params.username);
    await this.setState({ profile: p.data });
    if (UserService.instance.user.value)
      if (UserService.instance.user.value.username !== p.data.username) this.props.history.push('/');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const { profile } = this.state;
    if (!profile) {
      return <div>Loading</div>;
    }
    return (
      <Form {...formItemLayout} className="EditProfile-Form flex-grow-1 h-100">
        <Form.Item {...formItemLayout} label="fullName">
          {getFieldDecorator('fullName', {
            initialValue: profile.fullName,
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            initialValue: profile.email,
          })(<Input disabled />)}
        </Form.Item>
        <Form.Item label="Mobile">
          {getFieldDecorator('mobile', {
            initialValue: profile.mobile,
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Picture URL">
          {getFieldDecorator('pictureURL', {
            initialValue: profile.pictureURL || 'https://img.rasset.ie/000fc0a3-500.jpg',
          })(<Input />)}
        </Form.Item>
        <Form.Item className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Button onClick={this.handleSubmit} shape="round" className="form-button">
              Save Changes
            </Button>
            <Button shape="round" className="p-2 form-button" href="">
              <Link to="/">Cancel</Link>
            </Button>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  name: 'editProfile-form',
})(withRouter(EditProfileForm));
