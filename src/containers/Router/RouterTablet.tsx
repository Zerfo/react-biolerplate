import { lazy, memo, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from "components/Layout";

import { ROUTES as APP_ROUTES } from 'constants/routes';

const RootPageTablet = lazy(() => import('pages/RootPage/Tablet'));
const NotFoundPageTablet = lazy(() => import('pages/NotFoundPage/Tablet'));

function RouterTablet() {
	useEffect(() => {
		window.addEventListener('offline', () => {
			console.error('Connection error, check your network connection');
		});
	}, []);

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={APP_ROUTES.ROOT} element={<RootPageTablet />} />

				<Route path="*" element={<NotFoundPageTablet />} />
			</Route>
		</Routes>
	);
}

export default memo(RouterTablet);
