import Header from './../components/Header/Header';
import Section from './../components/Section/Section';
import Container from './../components/Container/Container';
import BtnScrollToTop from 'shared/components/BtnScrollToTop/BtnScrollToTop';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <ContentWrapper>
        <BtnScrollToTop />
        <Header />
        <Main>
          <Section>
            <Container>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Container>
          </Section>
        </Main>
      </ContentWrapper>
    </>
  );
};

export default SharedLayout;
