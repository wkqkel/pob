import Cube from './Cube';

import styles from './home.module.scss';

const Home = () => {
  return (
    <section className={styles.main}>
      <Cube />
    </section>
  );
};

export default Home;
