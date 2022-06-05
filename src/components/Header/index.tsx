import ShuffleText from 'components/Header/ShuffleText';

import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <ShuffleText text='Sangwon Park' className={styles.title} />
      <span className={styles.subTitle}>frontend</span>
    </div>
  );
};

export default Header;
