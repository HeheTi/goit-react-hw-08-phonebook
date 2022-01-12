import { useState } from 'react';
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
import s from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setLoginEmail] = useState('');
  const [password, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPasswordToggle = () => {
    setShowPassword(prev => !prev);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

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
    <div className={s.wrapperLogin}>
      <Box
        component="form"
        onSubmit={onSubmitLoginForm}
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
          label="Email"
          type="email"
          name="email"
          value={email}
          variant="outlined"
          color="secondary"
          onChange={changeStateFormLogin}
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
            onChange={changeStateFormLogin}
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

export default LoginPage;
