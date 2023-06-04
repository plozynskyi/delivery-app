import styled from 'styled-components';

const ShopWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
  }
`;

const BusketForm = styled.form`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 50px;
  }
`;

const ShopsWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    padding: 50px;

    min-width: 464px;

    border: 2px solid ${({ theme }) => theme.colors.blue};
    border-radius: 20px;

    box-shadow: ${({ theme }) => theme.boxShadows.main};
  }
`;

const ProductsWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
    margin-bottom: 25px;
  }
`;

const SubmitWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  }
`;

const TotalPrice = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-family: ${({ theme }) => theme.fonts.main.semiBold};
    font-size: ${({ theme }) => theme.fontSizes[3]};

    color: ${({ theme }) => theme.colors.blue};
  }
`;

export {
  ShopWrapper,
  BusketForm,
  ShopsWrapper,
  ProductsWrapper,
  TitleWrapper,
  SubmitWrapper,
  TotalPrice,
};
