import { IWork } from '../DB';
import styles from './post.module.scss';

interface IProps {
  item: IWork;
  index: number;
  debounceOrder: number;
}

const Post = ({ item, index, debounceOrder }: IProps) => {
  const style = {
    transform: `rotate(${-60 * (index + debounceOrder)}deg) translateY(-150vh)`,
  };

  return (
    <li className={styles.post} style={style}>
      <div className={styles.contentWrap}>
        <div className={styles.img} />
        <p className={styles.title}>
          {item.name} - {item.category} Project
        </p>
        <p className={styles.desc}>{item.date}</p>
        <button type='button' className={styles.more}>
          READ MORE +
        </button>
      </div>
    </li>
  );
};

export default Post;
