import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import { HeaderWrapper, Wrapper, NavWrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavWrapper>
            <Nav />
          </NavWrapper>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
