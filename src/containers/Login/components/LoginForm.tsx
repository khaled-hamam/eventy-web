import React, { Component } from 'react';
import { Form, Input, Button, Icon, Checkbox } from 'antd';
import { UserService } from '../../../services/userServices/user.service';
import '../../Forms.css';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import FormHeader from '../../../components/FormHeader/FormHeader';
import SubmitButton from '../../../components/SubmitButton';

interface ILoginFormProps extends RouteComponentProps<any> {
  form?: any;
}

class LoginForm extends Component<ILoginFormProps, {}> {
  private userService = UserService.instance;

  submitLogin = async (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    if (await this.userService.login(formData)) {
      this.props.history.push('/');
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="form flex-grow-1 d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <Icon type="user" style={{ fontSize: '100px', color: '#ff4d4f' }} />
        </div>
        <FormHeader>Login</FormHeader>
        <Form.Item className="mt-4">
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
        <Form.Item className="d-flex justify-content-center align-items-center mt-4">
          <SubmitButton onSubmit={this.submitLogin}>Login</SubmitButton>
          <div className="d-flex justify-content-center align-items-center p-3">
            <Link to="/register">Register Now</Link>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'login-form' })(withRouter(LoginForm));
