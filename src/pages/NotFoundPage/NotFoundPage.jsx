import Button from '../../shared/components/Button/Button';
import React from 'react';
import { Title, BottomInfoWrapper, MainContainer } from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Title>Ooops! This page not found</Title>
      <BottomInfoWrapper>
        <Button
          type="button"
          text={'To main page'}
          clickHandler={() => navigate('/')}
        ></Button>
      </BottomInfoWrapper>
    </MainContainer>
  );
}

export default NotFoundPage;
