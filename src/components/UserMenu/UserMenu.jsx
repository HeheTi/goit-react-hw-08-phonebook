import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import defaultPicture from '../../image/def-avatar.jpg';

const s = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  btn: {
    cursor: 'pointer',
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  const token = useSelector(state => state.auth.token);
  // const mail = useSelector(state => state.auth.user.mail);

  return (
    <div style={s.container}>
      <img style={s.avatar} width="32" src={defaultPicture} alt="Avatar" />
      <p style={s.name}>Welcome, {name}</p>
      <button
        type="button"
        style={s.btn}
        onClick={() => dispatch(authOperations.logout(token))}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
