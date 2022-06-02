import styles from './work.module.scss';

import Post from './Post';
import { useState } from 'react';

const Work = () => {
  const [curOrder, setCurOrder] = useState(0);

  const onClick = () => {
    setCurOrder((prev) => prev + 1);
  };

  return (
    <section className={styles.work}>
      <ul className={styles.postList}>
        {[0, 0, 0, 0, 0, 0].map((item, index) => {
          const key = `post-${index}`;
          return <Post key={key} index={index} curOrder={curOrder} />;
        })}
      </ul>
      <button type='button' className={styles.button} onClick={onClick}>
        클릭
      </button>
    </section>
  );
};

export default Work;
