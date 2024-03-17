import { memo } from 'react';

import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
}

export default memo(Layout);
