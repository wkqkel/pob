import styles from './work.module.scss';
import { useMouse } from 'react-use';
import { useRef } from 'react';

const Work = () => {
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  return (
    <section className={styles.work} ref={ref}>
      <span>Work</span>
    </section>
  );
};

export default Work;
