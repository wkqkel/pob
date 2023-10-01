import cx from 'classnames'
import styles from './GNB.module.scss'
import { NavLink } from 'react-router-dom'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx(styles.btn, { [styles.isActive]: isActive })}>
            검색
          </NavLink>
        </li>
        <li>
          <NavLink to='bookmark' className={({ isActive }) => cx(styles.btn, { [styles.isActive]: isActive })}>
            즐겨찾기
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
