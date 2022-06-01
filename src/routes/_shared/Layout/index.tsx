import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

import Sidebar from '../Sidebar';
import Header from '../Header';

const Layout = () => {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <aside>
        <Sidebar />
      </aside>
    </div>
  );
};

export default Layout;
