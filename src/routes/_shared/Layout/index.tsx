import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Cursor from '../Cursor';

const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <Cursor />
    </div>
  );
};

export default Layout;
