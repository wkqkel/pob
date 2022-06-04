import ShuffleText from 'components/Header/ShuffleText';

import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <ShuffleText text='Sangwon Park' className={styles.title} />
        <span className={styles.subTitle}>frontend</span>
      </h1>
    </div>
  );
};

export default Header;
