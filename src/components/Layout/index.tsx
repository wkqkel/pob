import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

import GNB from '../GNB'

const PageTemplate = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <GNB />
      </footer>
    </div>
  )
}

export default PageTemplate
