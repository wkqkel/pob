import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.scss';
import cx from 'classnames';

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
            <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='about' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='work' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to='contact' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
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
