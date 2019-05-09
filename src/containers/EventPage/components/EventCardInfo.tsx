import React from 'react';
import { Card } from 'antd';

interface IEventCardProps {
  header: string;
  value: string;
  icon: string;
}

const EventCardInfo = (props: IEventCardProps) => (
  <Card style={{ width: '200pt', height: '70pt', backgroundColor: 'red' }}>
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex flex-row">
        <i className={`${props.icon} text-white`} />
      </div>
      <div className="d-flex flex-column flex-grow-1 align-items-center">
        <p className="text-white mb-0 font-weight-bold">{props.header}</p>
        <p className="text-white">{props.value}</p>
      </div>
    </div>
  </Card>
);

export default EventCardInfo;
