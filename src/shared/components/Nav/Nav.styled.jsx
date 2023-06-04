import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2] * 1 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[2] * 1 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.space[3] * 1 + 'px'};
  }
`;

const Item = styled.li`
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    border-right: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`;

const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.black};

  transition: color 350ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &.active {
    font-family: ${({ theme }) => theme.fonts.main.bold};
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-family: ${({ theme }) => theme.fonts.main.semiBold};
    font-size: ${({ theme }) => theme.fontSizes[4]};

    &.active {
      font-family: ${({ theme }) => theme.fonts.main.semiBold};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.space[1] * 8 + 'px'};

    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

const BusketLengthWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    right: 0;
    top: -10px;

    width: 35px;
    height: 35px;
    border: 2px solid ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;

    color: ${({ theme }) => theme.colors.blue};
  }
`;

export { List, Item, Link, BusketLengthWrapper };
