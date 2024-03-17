import { memo } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store';

function Root() {
  return (
		<Provider store={store}>
      <BrowserRouter>
        Hello world!
      </BrowserRouter>
		</Provider>
	);
}

export default memo(Root);
