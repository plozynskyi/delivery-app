import styled from 'styled-components';

const ProductsList = styled.ul`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

const ProductItem = styled.li`
  width: calc((100% - 20px) / 1);
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  background-color: ${({ theme }) => theme.colors.whiteStandart};

  transition: all 350ms ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: 5px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

export { ProductsList, ProductItem, ProductWrapper };
