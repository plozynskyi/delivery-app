import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  padding-top: ${({ theme }) => theme.space[1] * 5 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row-reverse;
    justify-content: flex-end;

    width: 100%;
  }
`;

export { HeaderWrapper, Wrapper, NavWrapper };
