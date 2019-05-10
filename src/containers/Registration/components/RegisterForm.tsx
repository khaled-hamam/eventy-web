import React, { Component } from 'react';
import { Form, Input, Radio, Icon } from 'antd';

import '../../Forms.css';
import { UserService } from '../../../services/userServices/user.service';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import FormHeader from '../../../components/FormHeader/FormHeader';
import SubmitButton from '../../../components/SubmitButton';

interface IRegistrationFormProps extends RouteComponentProps<any> {
  form: any;
}

class RegistrationForm extends Component<IRegistrationFormProps, {}> {
  private userService = UserService.instance;

  handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    if (await this.userService.register(formData)) {
      this.props.history.push('/login');
    }
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
      <Form {...formItemLayout} className="form flex-grow-1 d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <Icon type="user-add" style={{ fontSize: '100px', color: '#ff4d4f' }} />
        </div>
        <FormHeader>Registration</FormHeader>
        <Form.Item {...formItemLayout} label="Full Name" className="mt-4">
          {getFieldDecorator('fullName', {
            rules: [
              {
                required: true,
                message: 'Please input your Full Name',
              },
            ],
          })(<Input placeholder="Please input your Full Name" />)}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid Email!',
              },
              {
                required: true,
                message: 'Please input your Email!',
              },
            ],
          })(<Input placeholder="Please Enter your Email" />)}
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
            <SubmitButton onSubmit={this.handleSubmit}>Submit</SubmitButton>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'register-form' })(withRouter(RegistrationForm));
