import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import defaultPicture from '../../image/def-avatar.jpg';
import { normalizeName } from '../../services/normalize';
import { ImExit } from 'react-icons/im';
import { authSelectors } from '../../redux/auth';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getName);
  const token = useSelector(authSelectors.getToken);
  // const mail = useSelector(authSelectors.getMail);

  return (
    <div className={s.container}>
      <div className={s.imgWrapper}>
        <img
          className={s.avatar}
          width="32"
          src={defaultPicture}
          alt="Avatar"
        />
      </div>
      <p className={s.name}>Welcome, {normalizeName(name)}</p>
      <button
        type="button"
        className={s.btnOut}
        onClick={() => dispatch(authOperations.logout(token))}
      >
        <ImExit size="24" color="#5d095d" />
      </button>
    </div>
  );
};

export default UserMenu;
