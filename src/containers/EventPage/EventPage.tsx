import { Avatar, Card, Carousel, Button } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Event } from '../../dtos/Event';
import { EventService } from '../../services/eventServices/event.service';
import EventCardInfo from './components/EventCardInfo';
import './EventPage.css';
const { Meta } = Card;

interface IEventState {
  event?: Event;
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
    };
    // this.state = {
    //   event: {
    //     name: 'EVENTYYY',
    //     id: 1,
    //     date: new Date(Date.now()),
    //     type: 'ay haga',
    //     budget: 1000,
    //     attendeesLimit: 100,
    //     description: 'AGMAD EVENT 3AL KAWKAB',
    //     photosURL: [
    //       'https://c.ndtvimg.com/2018-11/68g3f5sk_event-generic_625x300_16_November_18.jpg',
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHcvZGUka9twFOW-F_ERHVMxl4PrWuQYB2sK0zxfV84wYVxqEbg',
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvST-ao9SCFCXoktADGYOAnQvDQlnugRCQYGEvsKurGuBaW0-',
    //     ],
    //     creator: undefined,
    //     planner: undefined,
    //   },
    // };
  }
  async componentDidMount() {
    const e = await this._eventService.getEvent(this.props.match.params.id);
    await this.setState({ event: e.data });
    console.log('***********', this.state.event);
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
          style={{ backgroundImage: `url(${event.photosURL[0]})` }}
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
            {event.photosURL.map(el => (
              <img src={el} alt="Event photos" />
            ))}
          </Carousel>
          <div>
            <Button style={{ marginBottom: '5%', height: '50px', width: '200px', color: 'red' }}>
              <Link to="/">Cancel</Link>
            </Button>
            <br />
            <Button style={{ height: '50px', width: '200px', color: 'green' }}>
              <Link to="/EditEvent">Edit</Link>
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
                      event.planner.pictureURL ||
                      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                    }
                  />
                }
                //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Event Planner"
                description={event.planner.username}
              />
              RATING: {event.planner.rating}
            </Card>
          </div>

          <div className="verticalLine" />

          <div className="eventDescription w-70 font-weight-bold">
            ABOUT THE EVENT:
            <br />
            {event.description}
          </div>
        </div>
      </div>
    );
  }
}
