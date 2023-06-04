import { navData } from './navData';

import { useSelector } from 'react-redux';
import { getTotalBusketLength } from 'redux/busket/busket-selectors';

import { List, Item, Link, BusketLengthWrapper } from './Nav.styled';

const Nav = () => {
  const busketLength = useSelector(getTotalBusketLength);

  const items = navData.map(({ text, path }) => (
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
