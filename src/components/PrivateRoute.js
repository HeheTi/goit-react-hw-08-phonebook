import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/', ...props }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
