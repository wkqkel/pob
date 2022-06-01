import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.scss';
import cx from 'classnames';

import { useState } from 'react';

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.sidebar}>
      <nav className={cx(styles.menu, { [styles.open]: isOpen })}>
        <ul className={styles.navList}>
          <li>
            <NavLink to='work' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to='blog' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='Visitor' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              Visitor
            </NavLink>
          </li>
          <li>
            <NavLink to='Contact' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <button type='button' className={styles.sideButton} onClick={onClick}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </button>
    </div>
  );
};

export default Work;
