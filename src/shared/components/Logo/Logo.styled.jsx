import styled from 'styled-components';

import { Link } from 'react-router-dom';

const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 50;
`;

const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.blue};

  transition: color 350ms ${({ theme }) => theme.transition.main};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export { LogoWrapper, LogoTitle };
