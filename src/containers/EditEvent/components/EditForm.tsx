import React, { Component } from 'react';
import { Form, Input, Checkbox, DatePicker, InputNumber, Button, Select } from 'antd';
import './EditForm.css';
import { EventService } from '../../../services/eventServices/event.service';
import moment from 'moment';
import FormHeader from '../../../components/FormHeader/FormHeader';
import SubmitButton from '../../../components/SubmitButton';
import { toEnumKeys } from '../../../utils/toEnumKeys';
import { EventOptions } from '../../../services/eventServices/dto/CreateEvent.dto';
import { RouteComponentProps, withRouter } from 'react-router';
import { Event } from '../../../dtos/Event';

interface IEditEventFormProps {
  form: any;
}

interface IEditEventFormState {
  event?: Event;
}

type MixedPropType = RouteComponentProps<{ id: string }> & RouteComponentProps<any>;

interface IEditEventFormProps extends MixedPropType {}

export class EditForm extends Component<IEditEventFormProps, IEditEventFormState> {
  private eventService: EventService;

  constructor(props: any) {
    super(props);
    this.eventService = new EventService();
    this.state = {
      event: undefined,
    };
  }
  submitEdit = (e: any) => {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    this.eventService.update(formData, this.props.match.params.id);
    console.log(formData);
    formData.location = {
      latitude: formData.location.split(',')[0],
      longitude: formData.location.split(',')[1],
    };
  };
  async componentDidMount() {
    const e = await this.eventService.getEvent(this.props.match.params.id);
    await this.setState({ event: e.data });

    // console.log('***********', this.state.event);
  }

  render() {
    const { event } = this.state;
    if (!event) {
      return <div>Loading</div>;
    }
    const fillEventOptions = toEnumKeys(EventOptions).map((option, index) => (
      <Select.Option key={index}>{option}</Select.Option>
    ));
    const { getFieldDecorator } = this.props.form;
    const dateFormat = 'YYYY/MM/DD';
    return (
      <Form className="form-style">
        <FormHeader>Edit Event</FormHeader>
        <Form.Item className="d-flex pt-4">
          {getFieldDecorator('name', {
            initialValue: event.name,
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('description', {
            initialValue: event.description,
          })(<Input />)}
        </Form.Item>

        <Form.Item>
          <DatePicker disabled defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('location', {
            initialValue: `${event.latitude},${event.longitude}`,
          })(<Input />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('type', {
            initialValue: event.type,
          })(<Input disabled />)}
        </Form.Item>

        <Form.Item label="Budget">
          <div className="d-flex justify-content align-items flex-column">
            {getFieldDecorator('budget', {
              initialValue: event.budget,
            })(<InputNumber min={1000} max={10000} />)}
          </div>
        </Form.Item>

        <Form.Item label="Number of attendees">
          <div className="d-flex justify-content align-items flex-column">
            {getFieldDecorator('attendeesLimit', {
              initialValue: event.attendeesLimit,
            })(<InputNumber min={1} max={500} />)}
          </div>
        </Form.Item>

        <Form.Item label="Event Options">
          {getFieldDecorator('eventOptions', {
            initialValue: event.eventOptions,
          })(<Select mode="multiple">{fillEventOptions}</Select>)}
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
})(withRouter(EditForm));
