import { memo } from 'react';

import styles from './NotFoundDesktop.module.scss';

function NotFoundDesktop() {
  return <div className={styles.wrapper}>NotFoundDesktop</div>;
}

export default memo(NotFoundDesktop);
