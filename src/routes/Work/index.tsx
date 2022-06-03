import { useState } from 'react';
import { useDebounce } from 'react-use';

import Post from './Post';
import styles from './work.module.scss';

const Work = () => {
  const [curOrder, setCurOrder] = useState(0);
  const [debounceOrder, setDebounceOrder] = useState(0);

  useDebounce(
    () => {
      setDebounceOrder((prev) => prev + 1);
    },
    200,
    [curOrder]
  );

  const onClick = () => {
    setCurOrder((prev) => prev + 1);
  };

  return (
    <section className={styles.work}>
      <ul className={styles.postList}>
        {[1, 2, 3, 4, 5, 6].reverse().map((item, index) => {
          const key = `post-${index}`;
          return <Post key={key} index={index} debounceOrder={debounceOrder} item={item} />;
        })}
      </ul>
      <button type='button' className={styles.button} onClick={onClick}>
        클릭
      </button>
    </section>
  );
};

export default Work;
