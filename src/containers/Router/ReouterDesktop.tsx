import { lazy, memo, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';

import { ROUTES as APP_ROUTES } from 'constants/routes';

const RootPageDesktop = lazy(() => import('pages/RootPage/Desktop'));
const NotFoundPageDesktop = lazy(() => import('pages/NotFoundPage/Desktop'));

function RouterDesktop() {
  useEffect(() => {
    window.addEventListener('offline', () => {
      console.error('Connection error, check your network connection');
    });
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={APP_ROUTES.ROOT} element={<RootPageDesktop />} />

        <Route path="*" element={<NotFoundPageDesktop />} />
      </Route>
    </Routes>
  );
}

export default memo(RouterDesktop);
