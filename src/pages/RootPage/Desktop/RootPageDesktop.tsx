import { memo } from 'react';

import styles from './RootPageDesktop.module.scss';

function RootPageDesktop() {
	return <div className={styles.wrapper}>RootPageDesktop</div>;
}

export default memo(RootPageDesktop);
