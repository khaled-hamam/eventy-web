import React, { Component } from 'react';
import { Button, Form, Input, DatePicker, Checkbox, InputNumber, message } from 'antd';
import './EventForm.css';
import moment from 'moment';
import { EventService } from '../../../services/eventServices/event.service';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EventOptions } from '../../../services/eventServices/dto/EditEvent.dto';
import { toEnumKeys } from '../../../utils/toEnumKeys';
import FormHeader from '../../../components/FormHeader/FormHeader';
import SubmitButton from '../../../components/SubmitButton';

interface ICreateEventFormProps extends RouteComponentProps<any> {
  form: any;
}

export class CreateEventForm extends Component<ICreateEventFormProps, {}> {
  private eventService = new EventService();

  submitCreate = async (e: any) => {
    // TODO: Fix integration with Backend
    // TODO: Integrate with Google Maps API
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    formData.date = moment(formData.date).format('YYYY-MM-DDTHH:mm:ssZ');
    formData.location = {
      latitude: '1',
      longitude: '2',
    };
    formData['eventOptions'] = [];
    console.log(formData.eventOptions);
    console.log(formData);
    const res = await this.eventService.create(formData);
    if (res !== undefined) {
      message.success('Event Created Successfully!');
      this.props.history.push(`/event/${res}`);
    } else {
      message.error('An error occured.');
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="form-style">
        <FormHeader>Create Event</FormHeader>

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

        <Form.Item label="Event Options">
          <div className="d-flex justify-content align-items flex-column">
            {getFieldDecorator('eventOptions', {
              rules: [{ required: false }],
            })(
              <div>
                <div className="d-flex flex-row">
                  {toEnumKeys(EventOptions).map(key => (
                    <Checkbox>{key}</Checkbox>
                  ))}
                </div>
              </div>,
            )}
          </div>
        </Form.Item>
        <div className="d-flex justify-content-center mt-4">
          <SubmitButton onSubmit={this.submitCreate} />
        </div>
      </Form>
    );
  }
}

export default Form.create({
  name: 'event-form',
})(withRouter(CreateEventForm));
