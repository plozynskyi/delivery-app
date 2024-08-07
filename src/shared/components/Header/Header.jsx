import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selector';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import MenuAuth from '../Auth/MenuAuth/MenuAuth';
import MenuUser from '../Auth/MenuUser/MenuUser';

import { HeaderWrapper, Wrapper, NavWrapper } from './Header.styled';

const Header = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavWrapper>
            <Nav />
          </NavWrapper>
          {!isLogin ? <MenuAuth /> : <MenuUser />}
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
