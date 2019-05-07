import React, { Component, useCallback, useReducer } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginPage.css';
import { UserService } from '../../Services/userServices/user.service';
import { MdPersonPin, MdFontDownload } from 'react-icons/md';
import { IoIosAirplane } from 'react-icons/io';
interface ILoginProps {
  form: any;
}

interface ILoginState {}

class LoginPage extends Component<ILoginProps, ILoginState> {
  userService = new UserService();
  submitLogin = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    //this.userService.login(formData);
    console.log(formData);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <Form className="login-form">
          <div className="d-flex justify-content-center align-items-center">
            <Icon type="user" style={{ fontSize: '100px', color: '#ff4d4f' }} />
          </div>
          <h5 className="card-header text-center" style={{ background: ' #ff4d4f' }}>
            <strong style={{ color: 'white' }}>Sign in</strong>
          </h5>
          <Form.Item>
            <i className="IoIosAirplane" />
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your Email!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox className="form-check-input">Remember me</Checkbox>)}
            <Button onClick={this.submitLogin} shape="round" className="login-form-button">
              Log in
            </Button>
            <div className="d-flex justify-content-center align-items-center">
              <a href="">Register Now</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'login-page' })(LoginPage);
