import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setRegisterName] = useState('');
  const [email, setRegisterEmail] = useState('');
  const [password, setRegisterPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const resetForm = () => {
    setRegisterName('');
    setRegisterEmail('');
    setRegisterPassword('');
  };

  const handleClickShowPasswordToggle = () => {
    setShowPassword(prev => !prev);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
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
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  return (
    <div className={s.wrapperLogin}>
      <Box
        component="form"
        onSubmit={onSubmitForm}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Your name"
          type="text"
          name="name"
          value={name}
          color="secondary"
          variant="outlined"
          onChange={changeStateFormRegister}
          required
          sx={{
            width: 400,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          name="email"
          value={email}
          variant="outlined"
          color="secondary"
          onChange={changeStateFormRegister}
          required
          sx={{
            width: 400,
          }}
        />
        <FormControl
          sx={{
            width: 400,
          }}
          variant="outlined"
          color="secondary"
          required
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={changeStateFormRegister}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordToggle}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <button className={s.btnSingup} type="submit">
          Login
        </button>
      </Box>
    </div>
  );
};

export default RegisterPage;
