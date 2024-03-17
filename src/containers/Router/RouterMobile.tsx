import { lazy, memo, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';

import { ROUTES as APP_ROUTES } from 'constants/routes';

const RootPageMobile = lazy(() => import('pages/RootPage/Mobile'));
const NotFoundPageMobile = lazy(() => import('pages/NotFoundPage/Mobile'));

function RouterMobile() {
	useEffect(() => {
		window.addEventListener('offline', () => {
			console.error('Connection error, check your network connection');
		});
	}, []);

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={APP_ROUTES.ROOT} element={<RootPageMobile />} />

				<Route path="*" element={<NotFoundPageMobile />} />
			</Route>
		</Routes>
	);
}

export default memo(RouterMobile);
