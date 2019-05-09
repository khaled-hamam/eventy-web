import React, { Component } from 'react';
import { Form, Input, Checkbox, DatePicker, InputNumber, Button } from 'antd';
import './EditForm.css';
import { EventService } from '../../../services/eventServices/event.service';
import moment from 'moment';

interface IEditEventFormProps {
  form: any;
}
export class EditForm extends Component<IEditEventFormProps, {}> {
  eventService = new EventService();
  submitEdit = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    this.eventService.create(formData);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const dateFormat = 'YYYY/MM/DD';
    return (
      <Form className="form-style">
        <h5 className="card-header text-center" style={{ background: ' #ff4d4f' }}>
          <strong style={{ color: 'white' }}>Edit Event</strong>
        </h5>
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
              <Checkbox>DJ</Checkbox>
              <Checkbox>Decoration</Checkbox>
              <Checkbox>Photographer</Checkbox>
              <Checkbox>Catering</Checkbox>
            </div>
          </div>
        </Form.Item>

        <div className="d-flex justify-content-center align-items-center ">
          <Button onClick={this.submitEdit} shape="round" className="form-button" type="primary">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}
export default Form.create({
  name: 'edit-event-form',
})(EditForm);
