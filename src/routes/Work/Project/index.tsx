import { useRecoilState } from 'recoil';
import { detailState } from 'states/atom';

import { IProject } from '../ProjectList';

import styles from './project.module.scss';

interface IProps {
  item: IProject;
  index: number;
  debounceOrder: number;
}

const Project = ({ item, index, debounceOrder }: IProps) => {
  const [, setDetail] = useRecoilState(detailState);

  const onClick = () => {
    setDetail(item.id);
  };

  const transformStyle = {
    transform: `rotate(${-60 * (index + debounceOrder)}deg) translateY(-150vh)`,
  };

  return (
    <li className={styles.project} style={transformStyle}>
      <div className={styles.contentWrap}>
        <div className={styles.img} style={{ backgroundImage: `url(${item.image})` }} />
        <p className={styles.title}>
          {item.id} - {item.sort} Project
        </p>
        <p className={styles.desc}>{item.date}</p>
        <button type='button' onClick={onClick} className={styles.more}>
          READ MORE +
        </button>
      </div>
    </li>
  );
};

export default Project;
