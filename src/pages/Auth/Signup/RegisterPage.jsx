import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'shared/components/RegisterForm/RegisterForm';
import { RegisterBox } from './register-page.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = ({ name, email, password }) => {
    dispatch(signup({ name, email, password }));
  };

  return (
    <RegisterBox>
      <RegisterForm onSubmit={handleSignup} />
    </RegisterBox>
  );
};

export default RegisterPage;
