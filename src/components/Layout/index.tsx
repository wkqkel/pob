import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'
import GNB from '../GNB'
import SearchForm from 'components/SearchForm'

const PageTemplate = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <SearchForm />
      </header>
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
