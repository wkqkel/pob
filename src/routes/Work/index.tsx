import { useState } from 'react';
import { useDebounce } from 'react-use';
import { IWork, MY_WORKS } from './DB';

import Post from './Post/Post';
import { getCircleArray } from './utils';
import styles from './work.module.scss';

const Work = () => {
  const [curOrder, setCurOrder] = useState(1);
  const [debounceOrder, setDebounceOrder] = useState(0);
  const [circleArray, setCircleArray] = useState<IWork[]>(getCircleArray(0));

  const totalLength = MY_WORKS.length;

  useDebounce(
    () => {
      setDebounceOrder((prev) => (prev % totalLength) + 1);
    },
    200,
    [curOrder]
  );

  const onClick = () => {
    setCurOrder((prev) => prev + 1);
    console.log(circleArray);
    if (curOrder % 6 === 0) {
      setCircleArray(getCircleArray(debounceOrder));
    }
  };

  return (
    <section className={styles.work}>
      <div className={styles.order}>{debounceOrder}</div>
      <ul className={styles.postList}>
        {circleArray.reverse().map((item, index) => {
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
