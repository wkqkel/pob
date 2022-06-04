import { useState } from 'react';
import { useDebounce } from 'react-use';

import { WORKS } from './DB';

import { ArrowIcon } from 'assets/svgs';
import Post from './Post/Post';

import styles from './work.module.scss';

const Work = () => {
  const [curOrder, setCurOrder] = useState(0);
  const [debounceOrder, setDebounceOrder] = useState(0);

  useDebounce(
    () => {
      setDebounceOrder((prev) => (prev % 6) + 1);
    },
    200,
    [curOrder]
  );

  const onClick = () => {
    setCurOrder((prev) => prev + 1);
  };

  return (
    <section className={styles.work}>
      <div className={styles.order}>{debounceOrder} / 6</div>
      <ul className={styles.postList}>
        {[...WORKS].reverse().map((item, index) => {
          const key = `post-${index}`;
          return <Post key={key} index={index} debounceOrder={debounceOrder} item={item} />;
        })}
      </ul>
      <button type='button' className={styles.nextButton} onClick={onClick}>
        <ArrowIcon />
      </button>
    </section>
  );
};

export default Work;
