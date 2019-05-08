import React, { Component } from 'react';
import { Form, Input, Radio, Button, Icon } from 'antd';

import '../containers/Forms.css';
import { UserService } from '../Services/userServices/user.service';

interface IRegistrationFormProps {
  form: any;
}

class RegistrationForm extends Component<IRegistrationFormProps, {}> {
  userService = new UserService();
  handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    this.userService.register(formData);
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
      <Form {...formItemLayout} className="form flex-grow-1 h-100">
        <div className="d-flex justify-content-center align-items-center">
          <Icon type="user-add" style={{ fontSize: '100px', color: '#ff4d4f' }} />
        </div>
        <h5 className="card-header text-center" style={{ background: ' #ff4d4f' }}>
          <strong style={{ color: 'white' }}>Registration</strong>
        </h5>
        <Form.Item {...formItemLayout} label="fullName">
          {getFieldDecorator('fullName', {
            rules: [
              {
                required: true,
                message: 'Please input your fullName',
              },
            ],
          })(<Input placeholder="Please input your fullName" />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input placeholder="Please Enter your E-mail" />)}
        </Form.Item>
        <Form.Item label="Username">
          {getFieldDecorator('username', {
            rules: [
              {
                type: 'username',
                message: 'The input is not valid!',
              },
              {
                required: true,
                message: 'Please input your username!',
              },
            ],
          })(<Input placeholder="Please Enter your Username" />)}
        </Form.Item>
        <Form.Item label="Mobile">
          {getFieldDecorator('mobile', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input placeholder="Please Enter your phone Number" style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Password">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
            ],
          })(<Input type="password" placeholder="Please Enter your password" />)}
        </Form.Item>
        <Form.Item label="Role">
          <div>
            {getFieldDecorator('role', {
              rules: [{ required: true, message: 'Please input your Role!' }],
            })(
              <Radio.Group>
                <div className="d-flex justify-content-center align-items-center">
                  <Radio value="creator">Event Creator</Radio>
                  <Radio value="planner">Event Planner</Radio>
                </div>
              </Radio.Group>,
            )}
          </div>
        </Form.Item>
        <Form.Item className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Button onClick={this.handleSubmit} shape="round" className="form-button">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  name: 'register-form',
})(RegistrationForm);
