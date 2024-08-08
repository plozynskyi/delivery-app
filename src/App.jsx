import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Loader from './shared/Loader/Loader';
import { routes } from 'routes';

import { current } from './redux/auth/auth-operations';

const SharedLayout = lazy(() => import('shared/SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));

const LoginPage = lazy(() => import('pages/Auth/Login/LoginPage'));
const RegisterPage = lazy(() => import('pages/Auth/Signup/RegisterPage'));

const PublicRoute = lazy(() =>
  import('./shared/components/PublicRoute/PublicRoute')
);
const PrivateRoute = lazy(() =>
  import('./shared/components/PrivateRoute/PrivateRoute')
);

const ShopPage = lazy(() => import('pages/ShopPage/ShopPage'));
const ShoppingPage = lazy(() => import('pages/ShoppingPage/ShoppingPage'));
const HistoryPage = lazy(() => import('pages/HistoryPage/HistoryPage'));
const CouponsPage = lazy(() => import('pages/CouponsPage/CouponsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const ShopProducts = lazy(() =>
  import('./shared/components/ShopProducts/ShopProducts')
);
const OrderDetail = lazy(() =>
  import('./shared/components/OrderDetail/OrderDetail.jsx')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const {
    SIGNIN,
    SIGNUP,
    SHOP,
    SHOPDETAILS,
    SHOPPING,
    HISTORY,
    HISTORYORDER,
    COUPONS,
  } = routes;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />

          <Route element={<PublicRoute />}>
            <Route path={SIGNIN} element={<LoginPage />} />
            <Route path={SIGNUP} element={<RegisterPage />} />
            <Route path={SHOP} element={<ShopPage />}>
              <Route path={SHOPDETAILS} element={<ShopProducts />} />
            </Route>
            <Route path={SHOPPING} element={<ShoppingPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path={HISTORY} element={<HistoryPage />}>
              <Route path={HISTORYORDER} element={<OrderDetail />} />
            </Route>
            <Route path={COUPONS} element={<CouponsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
