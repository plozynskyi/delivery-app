import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 50px;
  padding: 50px;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const OrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  width: 100%;
  height: 500px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const OrderItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const OrderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  padding: 15px;

  width: 464px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const OrderItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  width: 100%;

  transition: all 300ms ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`;

const LinkElem = styled(NavLink)`
  width: 100%;
  /* position: relative;

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

  z-index: 0; */
  /* 
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
  } */
`;

export {
  HistoryWrapper,
  OrdersWrapper,
  OrderItemsWrapper,
  OrderList,
  OrderItem,
  LinkElem,
};
