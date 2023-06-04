import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export const Title = styled.h2`
  margin-top: 80px;
  display: block;
  align-items: center;
  justify-content: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const BottomInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    margin-top: 68px;
  }
  @media (min-width: 1280px) {
    margin-top: 18px;
  }
`;
