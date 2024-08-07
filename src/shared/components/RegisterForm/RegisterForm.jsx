import PropTypes from 'prop-types';

import useForm from 'hooks/useForm';
import InputField from '../TextField/InputField';
import initialState from './initialState';
import fields from './fields';

import { Button } from '@mui/material';
import { RegisterFormBox } from './register-form.styled';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password, confirmPassword } = state;

  return (
    <RegisterFormBox onSubmit={handleSubmit}>
      <InputField
        sx={{ width: '350px' }}
        value={name}
        handleChange={handleChange}
        {...fields.name}
        margin="dense"
      />
      <InputField
        sx={{ width: '350px', marginTop: '15px' }}
        value={email}
        handleChange={handleChange}
        {...fields.email}
        margin="dense"
      />
      <InputField
        sx={{ width: '350px', marginTop: '15px' }}
        value={password}
        handleChange={handleChange}
        {...fields.password}
        margin="dense"
      />
      <InputField
        sx={{ width: '350px', marginTop: '15px' }}
        value={confirmPassword}
        handleChange={handleChange}
        {...fields.confirmPassword}
        margin="dense"
      />
      <Button
        sx={{ width: '350px', marginTop: '15px' }}
        variant="contained"
        type="submit"
      >
        Sign up
      </Button>
    </RegisterFormBox>
  );
};
export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
