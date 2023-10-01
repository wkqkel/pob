import { Outlet } from 'react-router-dom'

import GNB from 'components/GNB'
import SearchForm from 'components/SearchForm'

import styles from './layout.module.scss'

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
