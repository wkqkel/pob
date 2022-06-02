import { useRef } from 'react';
import { useMouse } from 'react-use';
import styles from './cursor.module.scss';

const Cursor = () => {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  return (
    <div
      ref={ref}
      className={styles.cursor}
      style={{
        left: `${docX}px`,
        top: `${docY}px`,
      }}
    />
  );
};

export default Cursor;
