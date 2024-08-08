import { useDispatch, useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { getAllOrderUser } from '../../redux/history/operations';
import { getAllOrdersUser } from '../../redux/history/selectors';

import {
  HistoryWrapper,
  // OrdersWrapper,
  OrderItemsWrapper,
  OrderList,
  OrderItem,
  LinkElem,
} from './history-page-styled';
import { useEffect } from 'react';

const HistoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrderHistory = () => {
      dispatch(getAllOrderUser());
    };

    fetchOrderHistory();
  }, [dispatch]);

  const orders = useSelector(getAllOrdersUser);

  const items = orders.map(item => (
    <OrderItem key={item._id}>
      <LinkElem to={`${item._id}`}>
        <p>Order id - {item._id}</p>
        {/* <p>{item.name}</p> */}
        <p>Order phone - {item.phone}</p>
        <p>Order status - {item.status}</p>
        <p>Order total price - {item.totalPrice}</p>
      </LinkElem>
    </OrderItem>
  ));

  return (
    <HistoryWrapper>
      {/* <OrdersWrapper> */}
      <OrderList>{items}</OrderList>
      {/* </OrdersWrapper> */}
      <OrderItemsWrapper>
        <Suspense>
          <Outlet />
        </Suspense>
      </OrderItemsWrapper>
    </HistoryWrapper>
  );
};

export default HistoryPage;
