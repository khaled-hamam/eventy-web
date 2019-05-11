import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const LoggedOutNavContent = () => {
  return (
    <React.Fragment>
      <Link to="/login" className="mr-2 login">
        LOGIN
      </Link>
      <Button className="eventy-btn" type="primary">
        <Link to="/register">REGISTER</Link>
      </Button>
    </React.Fragment>
  );
};

export default LoggedOutNavContent;
