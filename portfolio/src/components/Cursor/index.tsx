import { useCallback, useRef } from 'react';
import { useMouse } from 'react-use';
import { useRecoilState } from 'recoil';

import { themeState } from 'states/atom';

import styles from './cursor.module.scss';

const Cursor = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  const handleChangeTheme = useCallback((): void => {
    const newTheme = theme === 'DARK' ? 'LIGHT' : 'DARK';

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    document.documentElement.setAttribute('color-theme', newTheme);
  }, [setTheme, theme]);

  return (
    <button
      type='button'
      ref={ref}
      className={styles.cursor}
      style={{
        left: `${docX + 14}px`,
        top: `${docY + 14}px`,
      }}
      onClick={handleChangeTheme}
      aria-label='theme button'
    />
  );
};

export default Cursor;
