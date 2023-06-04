import { useSelector } from 'react-redux';

import { getCurrentShop } from 'redux/busket/busket-selectors';

import { ShopsList, ShopItem, LinkElem } from './shops.styled';

const Shops = ({ companys }) => {
  const current = useSelector(getCurrentShop);
  const shopLink = companys.map(item => {
    return (
      <ShopItem key={item._id}>
        <LinkElem to={`${item._id}`}>
          <img src={item.imgUrl} alt={item.title} width="25px" height="25px" />
          {item.title}
        </LinkElem>
      </ShopItem>
    );
  });

  return (
    <ShopsList>
      {Boolean(current[0]) ? (
        <LinkElem to={`${current[0].shop}`}>{current[0].shopTitle}</LinkElem>
      ) : (
        shopLink
      )}
    </ShopsList>
  );
};

export default Shops;
