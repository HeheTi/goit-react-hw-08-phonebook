import React from 'react';
import { NavLink } from 'react-router-dom';

const s = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" exact style={s.link} activeStyle={s.activeLink}>
        Registration
      </NavLink>
      <NavLink to="/login" exact style={s.link} activeStyle={s.activeLink}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
