// import ReCAPTCHA from 'react-google-recaptcha';

import { useState, useCallback } from 'react';

// import { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import BusketProducts from 'shared/components/BusketProducts/BusketProducts.jsx';

import { deleteAllProd } from '../../redux/busket/busket-slice';
import {
  getBusket,
  getBusketLength,
  getBusketTotalPrice,
} from '../../redux/busket/busket-selectors';

import { addOrder } from '../../redux/order/operations';
import { getUser } from '../../redux/auth/auth-selector';

import Button from 'shared/components/Button/Button.jsx';
import InputField from 'shared/components/TextField/InputField';
import initialState from './initialState';
import fields from './fields';

import {
  ShoppingCartWrapper,
  BusketForm,
  UserWrapper,
  ProductsWrapper,
  TitleWrapper,
  SubmitWrapper,
  TotalPrice,
} from './shopping-page-styled.jsx';

// import { reCaptcha } from 'shared/services/api-captcha';

const ShoppingPage = () => {
  const busket = useSelector(getBusket);
  const user = useSelector(getUser);
  const totalPrice = useSelector(getBusketTotalPrice);
  // const captchaRef = useRef(null);
  const [state, setState] = useState({
    ...initialState,
    busket: busket,
    id: user._id,
    totalPrice: totalPrice,
  });
  const busketLength = useSelector(getBusketLength);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = async e => {
    e.preventDefault();
    // const inputVal = await e.target[0].value;

    // const token = captchaRef.current.getValue();

    // reCaptcha(token);

    // captchaRef.current.reset();

    setState({ ...state });
    dispatch(addOrder(state));

    dispatch(deleteAllProd());
    toast.success('Order success', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    setState({ ...initialState });
  };

  const removeAllProd = id => {
    dispatch(deleteAllProd(id));
  };

  let { name, email, phone, address } = state;

  return (
    <BusketForm onSubmit={handleSubmit}>
      <ShoppingCartWrapper>
        <UserWrapper>
          <TitleWrapper>Order details:</TitleWrapper>
          <InputField
            classes={{ color: 'red' }}
            value={name}
            handleChange={handleChange}
            {...fields.name}
            margin="dense"
          />
          <InputField
            value={phone}
            handleChange={handleChange}
            {...fields.phone}
            margin="dense"
          />
          <InputField
            value={email}
            handleChange={handleChange}
            {...fields.email}
            margin="dense"
          />
          <InputField
            value={address}
            handleChange={handleChange}
            {...fields.address}
            margin="dense"
          />
        </UserWrapper>
        <ProductsWrapper>
          {Number(busketLength) ? (
            <Button
              text="Remove All"
              type="button"
              clickHandler={() => {
                removeAllProd();
              }}
            />
          ) : (
            ''
          )}
          {Number(busketLength) ? <BusketProducts /> : ''}
        </ProductsWrapper>
      </ShoppingCartWrapper>
      <SubmitWrapper>
        {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} /> */}
        <TotalPrice>{`Total price - ${totalPrice.toFixed(2)}`}</TotalPrice>
        {busketLength ? (
          <Button type="submit" text={'Submit'} />
        ) : (
          <Button disabled={true} type="submit" text={'Submit'} />
        )}
      </SubmitWrapper>
    </BusketForm>
  );
};

export default ShoppingPage;
