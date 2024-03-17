import { memo } from 'react';

import styles from './RootPageMobile.module.scss';

function RootPageMobile() {
	return <div className={styles.wrapper}>RootPageMobile</div>;
}

export default memo(RootPageMobile);
