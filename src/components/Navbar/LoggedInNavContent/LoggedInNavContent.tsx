import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserService } from '../../../services/userServices/user.service';

const LoggedInNavContent = (props: any) => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <p className="mr-4 mt-3 lh-0 font-weight-bold">
        Hello,{' '}
        <Link to={`/profile/${props.user.username}`} style={{ color: 'var(--primary-color)' }}>
          {props.user.fullName}
        </Link>
      </p>
      <Button className="eventy-btn" type="primary" onClick={() => UserService.instance.logout()}>
        LOGOUT
      </Button>
    </div>
  );
};

export default LoggedInNavContent;
