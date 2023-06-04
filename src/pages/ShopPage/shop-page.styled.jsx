import styled from 'styled-components';

const ShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding-top: 50px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const ShopsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  box-shadow: ${({ theme }) => theme.boxShadows.main};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 50px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 464px;
    padding: 50px;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;

  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  box-shadow: ${({ theme }) => theme.boxShadows.main};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 50px;

    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 50px;

    width: 100%;
    height: 606px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      padding: 20px;
      background-color: #ebebeb;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 15px;
      border-radius: 15px;
      background: #998686;
    }

    border: 2px solid ${({ theme }) => theme.colors.blue};
    border-radius: 5px;

    box-shadow: ${({ theme }) => theme.boxShadows.main};
  }
`;

const TitleWrapper = styled.h3`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: center;
  }
`;

const NoItemsOnPage = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 1.375;

  margin: 0;

  padding: 10px 0 10px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    padding: 20px 0 20px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    padding: 30px 0 30px 0;
  }
`;

export {
  ShopWrapper,
  ShopsWrapper,
  ProductsWrapper,
  TitleWrapper,
  NoItemsOnPage,
};
