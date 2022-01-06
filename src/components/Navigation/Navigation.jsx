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

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact style={s.link} activeStyle={s.activeLink}>
        Home
      </NavLink>

      <NavLink to="/contacts" exact style={s.link} activeStyle={s.activeLink}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
