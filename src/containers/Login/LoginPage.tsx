import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginPage.css';

interface ILoginProps {
  form: any;
}

interface ILoginState {}

class LoginPage extends Component<ILoginProps, ILoginState> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <Form className="login-form">
          <Form.Item>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <a href="">Register Now</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'login-page' })(LoginPage);
