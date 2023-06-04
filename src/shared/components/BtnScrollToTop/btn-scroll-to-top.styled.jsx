import styled from 'styled-components';

const ScrollToTop = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 50%;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.blue};

  background-color: transparent;

  z-index: 15;
  transition: all 350ms ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
  }

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.blue};
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
    background-color: ${({ theme }) => theme.colors.blue};
    svg {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`;

export { ScrollToTop };
