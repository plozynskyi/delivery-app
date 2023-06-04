import styled from 'styled-components';

const ShoppingCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const BusketForm = styled.form`
  padding-top: 50px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  min-width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 50px;
    min-width: 464px;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding-top: 10px;
  padding-bottom: 10px;

  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
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
  }
`;

const TitleWrapper = styled.h3`
  text-align: center;
  margin-bottom: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const TotalPrice = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[3]};

  color: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-family: ${({ theme }) => theme.fonts.main.semiBold};
    font-size: ${({ theme }) => theme.fontSizes[3]};

    color: ${({ theme }) => theme.colors.blue};
  }
`;

export {
  ShoppingCartWrapper,
  BusketForm,
  UserWrapper,
  ProductsWrapper,
  TitleWrapper,
  SubmitWrapper,
  TotalPrice,
};
