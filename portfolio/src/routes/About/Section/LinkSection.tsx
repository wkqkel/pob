import { GithubIcon, VelogIcon } from 'assets/svgs';

import styles from '../about.module.scss';

const LinkSection = () => (
  <section>
    <h2>Links</h2>
    <ul className={styles.links}>
      <li>
        <a href='https://github.com/wkqkel' target='_blank' rel='noopener noreferrer'>
          <GithubIcon className={styles.github} />
        </a>
      </li>
      <li>
        <a href='https://velog.io/@wkqkel' target='_blank' rel='noopener noreferrer'>
          <VelogIcon />
        </a>
      </li>
    </ul>
  </section>
);

export default LinkSection;
