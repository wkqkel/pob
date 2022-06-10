import { IProject } from 'types/project';

import styles from './project.module.scss';

interface IProps {
  item: IProject;
  index: number;
  debounceOrder: number;
}

const Project = ({ item, index, debounceOrder }: IProps) => {
  const transformStyle = {
    transform: `rotate(${-60 * (index + debounceOrder)}deg) translateY(-150vh)`,
  };

  const ImgStyle = {
    backgroundImage: `url(${item.image.src})`,
  };

  return (
    <li className={styles.project} style={transformStyle}>
      <div className={styles.contentWrap}>
        <div className={styles.img} style={ImgStyle} />
        <p className={styles.title}>
          {item.name} - {item.sort} Project
        </p>
        <p className={styles.desc}>{item.date}</p>
        <a className={styles.more} href={item.link} target='_blank' rel='noopener noreferrer'>
          READ MORE +
        </a>
      </div>
    </li>
  );
};

export default Project;
