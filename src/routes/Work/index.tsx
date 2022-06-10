import { useState } from 'react';
import { useDebounce } from 'react-use';

import { ProjectList } from './DB';

import Project from './Project';
import { ArrowNextIcon } from 'assets/svgs';

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
      <ul className={styles.workList}>
        {[...ProjectList].reverse().map((item, index) => (
          <Project key={item.id} index={index} debounceOrder={debounceOrder} item={item} />
        ))}
      </ul>
      <button type='button' className={styles.nextButton} onClick={onClick}>
        <ArrowNextIcon />
      </button>
    </section>
  );
};

export default Work;
