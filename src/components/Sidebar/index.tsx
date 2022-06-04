import { useState } from 'react';

import Link from './Link';

import styles from './sidebar.module.scss';
import cx from 'classnames';

const LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: 'about' },
  { name: 'Work', to: 'work' },
  { name: 'Contact', to: 'contact' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.sidebar}>
      <nav className={cx(styles.menu, { [styles.open]: isOpen })}>
        <ul className={styles.navList}>
          {LINKS.map((link) => (
            <Link key={link.name} onClick={onClick} link={link} />
          ))}
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

export default Sidebar;
