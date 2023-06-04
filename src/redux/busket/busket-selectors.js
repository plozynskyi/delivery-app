export const getBusket = ({ busket }) => busket.busket;

export const getBusketLength = ({ busket }) => busket.busket.length;

export const getTotalBusketLength = ({ busket }) => {
  const totalPrice = busket.busket.reduce((total, { quantity }) => {
    return total + quantity;
  }, 0);
  return totalPrice;
};

export const getBusketTotalPrice = ({ busket }) => {
  const totalPrice = busket.busket.reduce((total, { price, quantity }) => {
    return total + Number(price * quantity);
  }, 0);
  return totalPrice;
};

export const getCurrentShop = ({ busket }) => {
  const current = busket.busket.map(({ shop, shopTitle }) => {
    return { shop, shopTitle };
  });
  console.log(current);
  return current || null;
};
