import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <span className={styles.title}>Sangwon Park</span>
        <span className={styles.subTitle}>frontend</span>
      </h1>
    </div>
  );
};

export default Header;
