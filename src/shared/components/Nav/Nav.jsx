import { useSelector } from 'react-redux';

import { navData } from './navData';

import { getTotalBusketLength } from 'redux/busket/busket-selectors';

import { isUserLogin } from 'redux/auth/auth-selector';

import { List, Item, Link, BusketLengthWrapper } from './Nav.styled';

const Nav = () => {
  const busketLength = useSelector(getTotalBusketLength);

  const isLogin = useSelector(isUserLogin);

  const filterItem = !isLogin ? navData.filter(item => !item.private) : navData;

  const items = filterItem.map(({ text, path }) => (
    <Item key={text}>
      {text === 'Shopping Cart' ? (
        busketLength ? (
          <Link to={path}>
            {text}
            <BusketLengthWrapper>{busketLength}</BusketLengthWrapper>
          </Link>
        ) : (
          <Link to={path}>{text}</Link>
        )
      ) : (
        <Link to={path}>{text}</Link>
      )}
    </Item>
  ));

  return (
    <>
      <nav>
        <List>{items}</List>
      </nav>
    </>
  );
};

export default Nav;
