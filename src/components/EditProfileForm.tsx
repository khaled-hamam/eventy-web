import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

import '../containers/Forms.css';
import { ProfileService } from '../Services/profileServices/profile.service';

interface IEditProfileProps {
  form?: any;
}

class EditProfileForm extends Component<IEditProfileProps, {}> {
  profileService = new ProfileService();
  handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    // FIXME: this.profileService.editProfile(formData);
  };

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
    return (
      <Form {...formItemLayout} className="EditProfile-Form flex-grow-1 h-100">
        <Form.Item {...formItemLayout} label="fullName">
          {getFieldDecorator('fullName', {
            initialValue: 'Karim Elsayed',
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            initialValue: 'Karim@gmail.com',
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Mobile">
          {getFieldDecorator('mobile', {
            initialValue: '01098214762',
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Picture URL">
          {getFieldDecorator('pictureUrL', {
            initialValue: 'https://img.rasset.ie/000fc0a3-500.jpg',
          })(<Input />)}
        </Form.Item>
        <Form.Item className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Button onClick={this.handleSubmit} shape="round" className="form-button">
              Save Changes
            </Button>
            <a className="p-2" href="">
              Cancel
            </a>
          </div>
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create({
  name: 'editProfile-form',
})(EditProfileForm);
