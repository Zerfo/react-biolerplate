import { useAppSelector } from '../hooks';

import { isFetchingSelector } from './selectors';

export const useExampleFetchingStatus = () => useAppSelector(isFetchingSelector);
