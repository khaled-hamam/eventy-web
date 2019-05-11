import React from 'react';
import { Route, Redirect } from 'react-router';
import { UserService } from '../../services/userServices/user.service';

interface IPrivateRouteProps {
  component: any;
  exact?: boolean;
  path?: string;
}

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRouteProps) => (
  <Route
    {...rest}
    render={props => (UserService.instance.user.value ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

export default PrivateRoute;
