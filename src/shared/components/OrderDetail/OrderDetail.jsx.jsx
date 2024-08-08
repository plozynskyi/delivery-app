import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getOrder } from '../../../redux/order/operations';

import { loading, error } from '../../../redux/products/selectors';

import Loader from 'shared/Loader/Loader';

import {
  ProductsList,
  ProductItem,
  ProductWrapper,
} from './order-detail.jsx.styled';

import { NoItemsOnPage } from 'pages/ShopPage/shop-page.styled';
import { getOrderDetails } from '../../../redux/order/selectors';

const OrderDetail = () => {
  let orderItems = useSelector(getOrderDetails);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);
  console.log(orderItems);
  const { orderId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductsList = () => {
      dispatch(getOrder(orderId));
    };

    fetchProductsList();
  }, [dispatch, orderId]);

  const productItem = orderItems.map(item => {
    return (
      <ProductItem key={item.id}>
        <ProductWrapper>
          <img src={item.imgUrl} width="150px" height="150px" alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price} - грн.</p>
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

export default OrderDetail;
