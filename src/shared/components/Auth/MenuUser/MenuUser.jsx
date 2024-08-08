import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../../../redux/auth/auth-selector';
import { logout } from '../../../../redux/auth/auth-operations';

import { LoginBox, UserName, Button } from './menu-user.styled';

const MenuUser = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <LoginBox>
      <UserName>{name}</UserName>
      <Button onClick={onLogout}>Logout</Button>
    </LoginBox>
  );
};

export default MenuUser;
