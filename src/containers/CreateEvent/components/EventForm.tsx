import React, { Component } from 'react';
import { Button, Form, Input, DatePicker, Checkbox, InputNumber } from 'antd';
import './EventForm.css';
import { EventService } from '../../../services/eventServices/event.service';
interface ICreateEventFormProps {
  form: any;
}
export class CreateEventForm extends Component<ICreateEventFormProps, {}> {
  eventService = new EventService();
  submitCreate = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    console.log(formData);
    this.eventService.create(formData);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="form-style">
        <h5 className="card-header text-center" style={{ background: ' #ff4d4f' }}>
          <strong style={{ color: 'white' }}>Create Event</strong>
        </h5>
        <Form.Item className="d-flex pt-4">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please Enter Event Name' }],
          })(<Input placeholder="Name" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please Enter Event Description' }],
          })(<Input placeholder="Description" />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('date', {
            rules: [{ required: true, message: 'Please Enter Event Date' }],
          })(<DatePicker />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'Please Enter Event Location' }],
          })(<Input placeholder="Location" />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('type', {
            rules: [{ required: true, message: 'Please Enter Event Type' }],
          })(<Input placeholder="Type" />)}
        </Form.Item>

        <Form.Item label="Budget">
          <div className="d-flex justify-content align-items flex-column">
            {getFieldDecorator('budget', {
              initialValue: 1000,
              rules: [{ required: true, message: 'Please Enter Event Budget' }],
            })(<InputNumber min={1000} max={10000} defaultValue={1000} />)}
          </div>
        </Form.Item>

        <Form.Item label="Number of attendees">
          <div className="d-flex justify-content align-items flex-column">
            {getFieldDecorator('attendeesLimit', {
              initialValue: 1,
              rules: [{ required: true, message: 'Please Enter Number of Attendees' }],
            })(<InputNumber min={1} max={500} defaultValue={1} />)}
          </div>
        </Form.Item>

        <Form.Item>
          <div className="d-flex justify-content align-items flex-column">
            {getFieldDecorator('eventOptions', {
              rules: [{ required: false }],
            })(
              <div>
                <p>Event Option</p>
                <div className="d-flex flex-row">
                  <Checkbox>DJ</Checkbox>
                  <Checkbox>Decoration</Checkbox>
                  <Checkbox>Photographer</Checkbox>
                  <Checkbox>Catering</Checkbox>
                </div>
              </div>,
            )}
          </div>
        </Form.Item>

        <div className="d-flex justify-content-center align-items-center ">
          <Button onClick={this.submitCreate} shape="round" className="form-button" type="primary">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}
export default Form.create({
  name: 'event-form',
})(CreateEventForm);
