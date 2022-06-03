import { useCallback, useRef, useState } from 'react';
import { useMouse } from 'react-use';
import { useRecoilState } from 'recoil';

import { themeState } from 'states/atom';

import styles from './cursor.module.scss';
import cx from 'classnames';

const Cursor = () => {
  const [clicked, setClicked] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  const handleChangeTheme = useCallback((): void => {
    setClicked(true);
    if (theme === 'DARK') {
      localStorage.setItem('theme', 'LIGHT');
      setTheme('LIGHT');
      document.documentElement.setAttribute('color-theme', 'LIGHT');
      return;
    }

    localStorage.setItem('theme', 'DARK');
    setTheme('DARK');
    document.documentElement.setAttribute('color-theme', 'DARK');
  }, [setTheme, theme]);

  return (
    <button
      type='button'
      ref={ref}
      className={cx(styles.cursor, [styles.clicked, clicked])}
      style={{
        left: `${docX + 12}px`,
        top: `${docY + 12}px`,
      }}
      onClick={handleChangeTheme}
      aria-label='theme button'
    />
  );
};

export default Cursor;
