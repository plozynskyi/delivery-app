import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 30px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: 30px;
  }
`;

const MainTitle = styled.h2`
  text-align: center;
  max-width: 280px;
  margin-top: ${({ theme }) => theme.space[5] + 'px'};
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.38;
  color: #000000;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 588px;
    height: 200px;
    margin-top: ${({ theme }) => theme.space[6] + 16 + 'px'};
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.47;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 501px;
    margin-top: ${({ theme }) => theme.space[6] + 111 + 'px'};
    font-family: ${({ theme }) => theme.fonts.main.extraBold};
    font-size: ${({ theme }) => theme.fontSizes[7]};
    line-height: 1.3;
  }
`;

export { MainContainer, MainTitle };
