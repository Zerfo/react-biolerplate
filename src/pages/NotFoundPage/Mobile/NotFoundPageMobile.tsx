import { memo } from 'react';

import styles from './NotFoundMobile.module.scss';

function NotFoundMobile() {
	return <div className={styles.wrapper}>NotFoundMobile</div>;
}

export default memo(NotFoundMobile);
