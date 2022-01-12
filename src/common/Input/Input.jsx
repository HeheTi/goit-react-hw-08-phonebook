import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Input = ({ ...arg }) => {
  return (
    <TextField
      {...arg}
      id="outlined-basic"
      variant="outlined"
      color="secondary"
      sx={{
        width: 400,
      }}
    />
  );
};

Input.propTypes = {
  arg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]),
};

export default Input;
