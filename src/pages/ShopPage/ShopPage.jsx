import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { fetchShops } from './../../redux/shops/operations.js';
import { getAllShops } from './../../redux/shops/selectors.js';
import { loading, error } from 'redux/shops/selectors';

import Shops from './../../shared/components/Shops/Shops.jsx';

import {
  ShopWrapper,
  ShopsWrapper,
  ProductsWrapper,
  TitleWrapper,
  NoItemsOnPage,
} from './shop-page.styled';
import Loader from 'shared/Loader/Loader.jsx';

const ShopPage = () => {
  const companys = useSelector(getAllShops);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchShopsList = () => {
      dispatch(fetchShops());
    };

    fetchShopsList();
  }, [dispatch]);

  const isCompanys = Boolean(companys.length);

  return (
    <ShopWrapper>
      <ShopsWrapper>
        <TitleWrapper>Shops:</TitleWrapper>
        {isLoading && <Loader />}
        {isCompanys && <Shops companys={companys} />}
        {!isCompanys && <NoItemsOnPage>No shops in list</NoItemsOnPage>}
        {isError && (
          <NoItemsOnPage>{`${isError}, try again later`}</NoItemsOnPage>
        )}
      </ShopsWrapper>
      <ProductsWrapper>
        <Suspense>
          <Outlet />
        </Suspense>
      </ProductsWrapper>
    </ShopWrapper>
  );
};

export default ShopPage;
