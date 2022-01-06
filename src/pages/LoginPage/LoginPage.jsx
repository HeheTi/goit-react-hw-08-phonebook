import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setLoginEmail] = useState('');
  const [password, setLoginPassword] = useState('');

  const resetForm = () => {
    setLoginEmail('');
    setLoginPassword('');
  };

  const changeStateFormLogin = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        return setLoginEmail(value);

      case 'password':
        return setLoginPassword(value);

      default:
        return;
    }
  };

  const onSubmitLoginForm = e => {
    e.preventDefault();
    const objLogin = { email, password };
    dispatch(authOperations.login(objLogin));
    resetForm();
  };

  return (
    <div>
      LoginPage
      <form onSubmit={onSubmitLoginForm}>
        <label htmlFor="">
          Email:{' '}
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeStateFormLogin}
            required
          />
        </label>
        <label htmlFor="">
          Password:{' '}
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeStateFormLogin}
            required
          />
        </label>
        <button className={s.btnSingup} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
