import { memo } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ErrorCatcher from 'components/ErrorCatcher';

import { store } from 'store';

function Root() {
  return (
		<ErrorCatcher>
			<Provider store={store}>
				<BrowserRouter>Hello world!</BrowserRouter>
			</Provider>
		</ErrorCatcher>
	);
}

export default memo(Root);
