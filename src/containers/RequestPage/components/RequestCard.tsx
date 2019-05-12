import React from 'react';
import { Card } from 'antd';
import { Request } from '../../../dtos/Request';
import { RequestService } from '../../../services/request.service';
import { RouteComponentProps } from 'react-router';

interface IRequestCardProps {
  eventId: number;
  creatorUserName: string;
  eventName: string;
  creatorName: string;
}

const RequestCard = (props: IRequestCardProps) => (
  <Card
    className="w-100"
    title={
      <h2>
        <a href={`/event/${props.eventId}`}>Event Name:{`${props.eventName}`} </a>
      </h2>
    }
  >
    Event Creator Name: <a href={`/profile/${props.creatorUserName}`}> {`${props.creatorName}`} </a>
  </Card>
);
export default RequestCard;
