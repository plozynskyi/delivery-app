import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ShopsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 360px;

    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 360px;
  }
`;

const ShopItem = styled.li`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const LinkElem = styled(NavLink)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  min-width: ${({ short }) => (short ? '129px' : '252px')};
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

export { ShopsList, ShopItem, LinkElem };
