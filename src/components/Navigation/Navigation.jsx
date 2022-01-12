import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

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
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact style={s.link} activeStyle={s.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact style={s.link} activeStyle={s.activeLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
