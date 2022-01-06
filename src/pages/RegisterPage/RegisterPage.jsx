import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setRegisterName] = useState('');
  const [email, setRegisterEmail] = useState('');
  const [password, setRegisterPassword] = useState('');

  const resetForm = () => {
    setRegisterName('');
    setRegisterEmail('');
    setRegisterPassword('');
  };

  const changeStateFormRegister = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setRegisterName(value);

      case 'email':
        return setRegisterEmail(value);

      case 'password':
        return setRegisterPassword(value);

      default:
        return;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      return;
    }
    const obj = { name, email, password };
    console.log('🚀 ~ obj', obj);
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  return (
    <div>
      RegisterPage
      <form onSubmit={onSubmitForm}>
        <label>
          {' '}
          Name:
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={changeStateFormRegister}
          />
        </label>
        <label>
          {' '}
          Email:
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={changeStateFormRegister}
          />
        </label>
        <label>
          {' '}
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={changeStateFormRegister}
          />
        </label>
        <button className={s.btnSingup} type="submit">
          signup
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
