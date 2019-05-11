import React, { Component } from 'react';
import { Form, Input, Checkbox, DatePicker, InputNumber } from 'antd';
import './EditForm.css';
import { EventService } from '../../../services/eventServices/event.service';
import moment from 'moment';
import FormHeader from '../../../components/FormHeader/FormHeader';
import SubmitButton from '../../../components/SubmitButton';
import { toEnumKeys } from '../../../utils/toEnumKeys';
import { EventOptions } from '../../../services/eventServices/dto/CreateEvent.dto';

interface IEditEventFormProps {
  form: any;
}

export class EditForm extends Component<IEditEventFormProps, {}> {
  private eventService = new EventService();

  submitEdit = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    this.eventService.update(formData);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const dateFormat = 'YYYY/MM/DD';
    return (
      <Form className="form-style">
        <FormHeader>Edit Event</FormHeader>
        <Form.Item className="d-flex pt-4">
          {getFieldDecorator('name', {
            initialValue: 'Chantal birthday',
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('description', {
            initialValue: 'My 21st birthday party',
          })(<Input />)}
        </Form.Item>

        <Form.Item>
          <DatePicker disabled defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('location', {
            initialValue: 'Cairo, Egypt',
          })(<Input />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('type', {
            initialValue: 'Birthday Party',
          })(<Input disabled />)}
        </Form.Item>

        <Form.Item>
          <div className="d-flex justify-content align-items flex-column">
            <p>Budget</p>
            <InputNumber min={1000} max={10000} defaultValue={1000} />
          </div>
        </Form.Item>

        <Form.Item>
          <div className="d-flex justify-content align-items flex-column">
            <p>Number of attendees</p>
            <InputNumber min={1} max={500} defaultValue={1} />
          </div>
        </Form.Item>

        <Form.Item>
          <div className="d-flex justify-content align-items flex-column">
            <p>Event Option</p>
            <div className="d-flex flex-row">
              {toEnumKeys(EventOptions).map(key => (
                <Checkbox>{key}</Checkbox>
              ))}
            </div>
          </div>
        </Form.Item>

        <div className="d-flex justify-content-center mt-4">
          <SubmitButton onSubmit={this.submitEdit} />
        </div>
      </Form>
    );
  }
}
export default Form.create({
  name: 'edit-event-form',
})(EditForm);
