import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signin } from 'redux/auth/auth-operations';

import LoginForm from 'shared/components/LoginForm/LoginForm';

import { LoginBox } from 'shared/components/Auth/MenuAuth/menu-auth.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = data => {
    dispatch(signin(data));
    navigate('/shop');
  };

  return (
    <LoginBox>
      <LoginForm onSubmit={handleSignin} />
    </LoginBox>
  );
};

export default LoginPage;
