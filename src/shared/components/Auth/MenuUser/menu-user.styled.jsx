import styled from 'styled-components';

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const UserName = styled.p`
  font-weight: bold;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  min-width: 129px;
  max-height: 40px;
  padding: ${({ theme }) => theme.space[2] * 2 + 'px'} 0;

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.blue};

  background-color: ${({ theme, filled }) =>
    filled ? theme.colors.blue : 'transparent'};
  border-width: ${({ filled }) => (filled ? 0 : '2px')};
  border-color: ${({ theme }) => theme.colors.blue};
  border-style: solid;
  border-radius: 40px;

  z-index: 0;

  transition: color 300ms ${({ theme }) => theme.transition.main},
    border-color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.whiteStandart};
    border-color: ${({ theme }) => theme.colors.yellow};
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  &.active {
    color: ${({ theme }) => theme.colors.whiteStandart};
    border-color: ${({ theme }) => theme.colors.yellow};
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export { LoginBox, UserName, Button };
