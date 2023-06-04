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
  position: absolute;
  right: -35px;
  top: -10px;

  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.blue};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    right: -35px;
    top: -10px;

    width: 25px;
    height: 25px;

    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: 0;
    top: -10px;

    width: 35px;
    height: 35px;

    font-size: 18px;
    font-weight: 500;
  }
`;

export { List, Item, Link, BusketLengthWrapper };
