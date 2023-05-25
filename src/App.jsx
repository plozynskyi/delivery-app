import { Routes, Route } from 'react-router-dom';

import { routes } from 'routes';

export const App = () => {
  const { SHOP, SHOPPING, HISTORY, COUPONS } = routes;

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path={SHOP} element={<ShopPage />} />
        <Route path={SHOPPING} />
        <Route path={HISTORY} />
        <Route path={COUPONS} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
