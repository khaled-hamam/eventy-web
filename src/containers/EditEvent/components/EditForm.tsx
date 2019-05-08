import React, { Component } from 'react';
import { Form, Input, Checkbox, DatePicker, InputNumber, Button } from 'antd';
import './EditForm.css';
export class EditForm extends Component {
  render() {
    return (
      <Form className="form-style">
        <Form.Item>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item>
          <DatePicker disabled />
        </Form.Item>

        <Form.Item>
          <Input placeholder="Location" />
        </Form.Item>

        <Form.Item>
          <Input disabled placeholder="Type" />
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
          <Button className="submit" type="primary">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}
