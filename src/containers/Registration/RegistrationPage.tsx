import React, { Component } from 'react';
import { Form, Input, Radio, Button } from 'antd';

import './RegistrationPage.css';
interface IRegistrationProps {
  form: any;
}

interface IRegistrationState {
  confirmDirty: false;
}

class RegistrationPage extends Component<IRegistrationProps, IRegistrationState> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
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
      <div className="d-flex justify-content-center align-items-center h-100">
        <Form {...formItemLayout} className="register-form">
          <Form.Item {...formItemLayout} label="Name">
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
          <Form.Item label="Password">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  // TODO: validate: our validation
                },
              ],
            })(<Input type="password" placeholder="Please Enter your password" />)}
          </Form.Item>
          <Form.Item label="Confirm Password: ">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  // TODO: Validator: confirm with above
                },
              ],
            })(<Input type="password" placeholder="Please Enter your password" />)}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input /* FIXME: addonBefore={prefixSelector}*/ style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item label="Role" className="d-flex flex-row">
            {getFieldDecorator('radio-group', {
              rules: [{ required: true, message: 'Please input your Role!' }],
            })(
              <Radio.Group>
                <Radio value="a">Event Creator</Radio>
                <Radio value="b">Event Planner</Radio>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'register-page' })(RegistrationPage);
