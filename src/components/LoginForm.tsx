import React, { Component } from 'react';
import { Form, Input, Button, Icon, Checkbox } from 'antd';
import { UserService } from '../Services/userServices/user.service';
import '../containers/Forms.css';
import { Link } from 'react-router-dom';

interface ILoginFormProps {
  form?: any;
}

class LoginForm extends Component<ILoginFormProps, {}> {
  userService = new UserService();
  submitLogin = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    this.userService.register(formData);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="form flex-grow-1 h-100">
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
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />,
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
        </Form.Item>
        <Form.Item className="d-flex justify-content-center align-items-center">
          <Button onClick={this.submitLogin} shape="round" className="form-button">
            Log in
          </Button>
          <div className="d-flex justify-content-center align-items-center p-3">
            <Link to="/register">Register Now</Link>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  name: 'login-form',
})(LoginForm);
