import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProducts } from '../../../redux/products/operations';
import { getAllProducts } from '../../../redux/products/selectors';

import { addProd } from '../../../redux/busket/busket-slice';

import { loading, error } from '../../../redux/products/selectors';

import Button from '../Button/Button';
import Loader from 'shared/Loader/Loader';

import {
  ProductsList,
  ProductItem,
  ProductWrapper,
} from './shop-products.styled';

import { NoItemsOnPage } from 'pages/ShopPage/shop-page.styled';

const ShopProducts = () => {
  let products = useSelector(getAllProducts);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  const { shopId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductsList = () => {
      dispatch(fetchProducts(shopId));
    };

    fetchProductsList();
  }, [dispatch, shopId]);

  const handleClick = item => {
    dispatch(addProd(item));
  };

  const productItem = products.map(item => {
    return (
      <ProductItem key={item._id}>
        <ProductWrapper>
          <img src={item.imgUrl} width="150px" height="150px" alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price} - грн.</p>
          <Button
            text="Add"
            value={item._id}
            type="button"
            clickHandler={() => handleClick(item)}
            short
          />
        </ProductWrapper>
      </ProductItem>
    );
  });
  return (
    <>
      {isLoading && <Loader />}
      {<ProductsList>{productItem}</ProductsList>},
      {isError && (
        <NoItemsOnPage>{`${isError}, try again later`}</NoItemsOnPage>
      )}
    </>
  );
};

export default ShopProducts;
