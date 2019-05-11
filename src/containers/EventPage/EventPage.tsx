import { Avatar, Card, Carousel, Button } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Event } from '../../dtos/Event';
import { EventService } from '../../services/eventServices/event.service';
import EventCardInfo from './components/EventCardInfo';
import './EventPage.css';
import { UserService } from '../../services/userServices/user.service';
import { EventOptions } from '../../services/eventServices/dto/CreateEvent.dto';
import { toEnumKeys } from '../../utils/toEnumKeys';
import EditEvent from '../EditEvent/EditEvent';
const { Meta } = Card;

interface IEventState {
  event?: Event;
  isCreator?: boolean;
}

type MixedPropType = RouteComponentProps<{ id: string }> & RouteComponentProps<any>;

// tslint:disable-next-line:no-empty-interface
interface IEventProps extends MixedPropType {}

export default class EventPage extends Component<IEventProps, IEventState> {
  private _eventService: EventService;

  constructor(props: any) {
    super(props);
    this._eventService = new EventService();
    this.state = {
      event: undefined,
      isCreator: undefined,
    };
  }
  async componentDidMount() {
    const e = await this._eventService.getEvent(this.props.match.params.id);
    await this.setState({ event: e.data });
    if (UserService.instance.user.value) {
      if (UserService.instance.user.value.username === e.data.creator.username) {
        this.setState({ isCreator: false });
      } else {
        this.setState({ isCreator: true });
      }
    }
  }

  render() {
    const { event } = this.state;

    if (!event) {
      return <div>Loading</div>;
    }
    return (
      <div className="h-100">
        <div
          className=" header-img h-50 d-flex justify-content-center align-items-center flex-column"
          style={{
            backgroundImage: `url(${event.photosURL[0] ||
              'https://c.ndtvimg.com/2018-11/68g3f5sk_event-generic_625x300_16_November_18.jpg'})`,
          }}
        >
          <h1 className="text-white">{event.name}</h1>
          <h3 className="text-white">{event.type}</h3>
          <h3 className="text-white">{event.description}</h3>
        </div>

        <div
          style={{ marginTop: '-50pt' }}
          className="headerCards d-flex justify-content-around align-items-center flex-row"
        >
          <EventCardInfo header="DATE" value={moment(event.date).format('LL')} icon="far fa-clock" />
          <EventCardInfo header="Location" value={'location'} icon="fas fa-map-marker-alt" />
          <EventCardInfo header="Seats" value={event.attendeesLimit.toString()} icon="fas fa-chair" />
        </div>

        <div className="d-flex  flex-row  justify-content-around" style={{ margin: '2%' }}>
          <Carousel className="d-flex w-50 h-50 " autoplay>
            {event.photosURL.length
              ? event.photosURL.map(el => <img src={el} alt="Event photos" />)
              : [
                  'https://c.ndtvimg.com/2018-11/68g3f5sk_event-generic_625x300_16_November_18.jpg',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHcvZGUka9twFOW-F_ERHVMxl4PrWuQYB2sK0zxfV84wYVxqEbg',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvST-ao9SCFCXoktADGYOAnQvDQlnugRCQYGEvsKurGuBaW0-',
                ].map(el => <img src={el} alt="Event photos" />)}
          </Carousel>
          <div>
            <Button
              hidden={this.state.isCreator}
              style={{ marginBottom: '5%', height: '50px', width: '200px', color: 'red' }}
            >
              <Link to="/">Cancel</Link>
            </Button>
            <br />
            <Button hidden={this.state.isCreator} style={{ height: '50px', width: '200px', color: 'green' }}>
              <Link to={`/event/${event.id}/edit-event`}>Edit</Link>
            </Button>
          </div>
          <div className="verticalLine" />
          <div className="Cards d-flex flex-column  justify-content-around">
            <Card className=" eventCreatorCard w-30">
              <Meta
                avatar={
                  <Avatar
                    src={
                      event.creator.pictureURL ||
                      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                    }
                  />
                }
                //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Event Creator"
                description={event.creator.username}
              />
            </Card>

            <Card className=" eventCreatorCard w-30">
              <Meta
                avatar={
                  <Avatar
                    src={
                      event.planner
                        ? event.planner.pictureURL ||
                          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                        : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                    }
                  />
                }
                //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Event Planner"
                description={event.planner ? event.planner.username : 'Not Assigned'}
              />
              {event.planner && `RATING: ${event.planner.rating}`}
            </Card>
          </div>
          <div className="verticalLine" />
          <div className=" w-70 font-weight-bold">
            Event Options: <br />
            {event.eventOptions.map(key => (
              <p>{EventOptions[key]}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
