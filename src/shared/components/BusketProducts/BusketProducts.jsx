import { useSelector, useDispatch } from 'react-redux';

import { getBusket } from '../../../redux/busket/busket-selectors';
import {
  deleteProd,
  addQuantityProd,
} from '../../../redux/busket/busket-slice';

import Button from '../Button/Button';

import {
  ProductsList,
  ProductItem,
  ProductWrapper,
} from './busket-products.styled';

const BusketProducts = () => {
  const dispatch = useDispatch();
  let products = useSelector(getBusket);

  let uniqueProducts = products.reduce(
    (acc, product) => {
      if (acc.map[product._id]) return acc;

      acc.map[product._id] = true;
      acc.products.push(product);
      return acc;
    },
    {
      map: {},
      products: [],
    }
  ).products;

  const removeProd = id => {
    dispatch(deleteProd(id));
  };

  const addProd = id => {
    dispatch(addQuantityProd(id));
  };

  const productItem = uniqueProducts.map(item => {
    return (
      <ProductItem key={item._id}>
        <ProductWrapper>
          <img src={item.imgUrl} width="150px" alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price} - грн.</p>
          <p>{`Кількість - ${item.quantity}`}</p>
          <Button
            text="Add"
            clickHandler={() => {
              addProd(item._id);
            }}
            type="button"
            short
          />
          <Button
            text="Delete"
            clickHandler={() => {
              removeProd(item._id);
            }}
            type="button"
            short
          />
        </ProductWrapper>
      </ProductItem>
    );
  });
  return (
    <>
      <ProductsList>{productItem}</ProductsList>
    </>
  );
};

export default BusketProducts;
