import styles from './cube.module.scss';

const Cube = () => {
  return (
    <div className={styles.cube}>
      <div className={styles.front} />
      <div className={styles.back} />
      <div className={styles.left} />
      <div className={styles.right} />
      <div className={styles.top} />
      <div className={styles.bottom} />
    </div>
  );
};

export default Cube;
