import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import Loader from 'shared/Loader/Loader';
import { routes } from 'routes';

const SharedLayout = lazy(() => import('shared/SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const ShopPage = lazy(() => import('pages/ShopPage/ShopPage'));
const ShoppingPage = lazy(() => import('pages/ShoppingPage/ShoppingPage'));
// const HistoryPage = lazy(() => import('pages/HistoryPage/HistoryPage'));
// const CouponsPage = lazy(() => import('pages/CouponsPage/CouponsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const ShopProducts = lazy(() =>
  import('./shared/components/ShopProducts/ShopProducts')
);

export const App = () => {
  const {
    SHOP,
    SHOPDETAILS,
    SHOPPING,
    // HISTORY, COUPONS
  } = routes;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path={SHOP} element={<ShopPage />}>
            <Route path={SHOPDETAILS} element={<ShopProducts />} />
          </Route>
          <Route path={SHOPPING} element={<ShoppingPage />} />
          {/* <Route path={HISTORY} element={<HistoryPage />} />
          <Route path={COUPONS} element={<CouponsPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
