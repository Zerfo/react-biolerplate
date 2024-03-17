import { memo } from 'react';

import styles from './RootPageTablet.module.scss';

function RootPageTablet() {
	return <div className={styles.wrapper}>RootPageTablet</div>;
}

export default memo(RootPageTablet);
