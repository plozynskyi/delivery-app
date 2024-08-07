import PropTypes from 'prop-types';

import InputField from '../TextField/InputField';
import useForm from 'hooks/useForm';
import initialState from './initialState';
import fields from './fields';

import { Button } from '@mui/material';

import { LoginFormBox } from './login-form.styled';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <LoginFormBox onSubmit={handleSubmit}>
      <InputField
        sx={{ width: '350px' }}
        value={email}
        handleChange={handleChange}
        {...fields.email}
      />
      <InputField
        sx={{ width: '350px', marginTop: '15px' }}
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button
        sx={{ width: '350px', marginTop: '15px' }}
        variant="contained"
        type="submit"
        margin="normal"
      >
        Sign in
      </Button>
    </LoginFormBox>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
