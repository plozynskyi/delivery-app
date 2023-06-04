import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'shared/components/Button/Button';

import { MainContainer, MainTitle } from './MainPage.styled';

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <MainContainer>
      <MainTitle>Order the best products with fast delivery</MainTitle>
      <Button
        type="button"
        text={'Go to order'}
        clickHandler={() => navigate('/shop')}
      />
    </MainContainer>
  );
};

export default MainPage;
