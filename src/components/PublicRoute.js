import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
  ...props
}) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...props}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
