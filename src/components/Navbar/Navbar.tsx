import React from 'react';
import './Navbar.css';
import { Logo } from '../Logo/Logo';
import { withRouter } from 'react-router-dom';
import LoggedInNavContent from './LoggedInNavContent/LoggedInNavContent';
import LoggedOutNavContent from './LoggedOutNavContent/LoggedOutNavContent';

const getStyles = (pathname: string) => {
  if (pathname === '/') {
    return 'fixed-top';
  } else {
    return 'navbar-custom';
  }
};

const Navbar = (props: any) => (
  <nav className={`d-flex align-items-center ${getStyles(props.location.pathname)}`}>
    <Logo />
    <div className="py-2 px-4">
      {props.user !== undefined ? <LoggedInNavContent user={props.user} /> : <LoggedOutNavContent />}
    </div>
  </nav>
);

export default withRouter(Navbar);
