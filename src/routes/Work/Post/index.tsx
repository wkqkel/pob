import styles from './post.module.scss';

interface IProps {
  item: number;
  index: number;
  debounceOrder: number;
}

const Post = ({ item, index, debounceOrder }: IProps) => {
  const style = {
    transform: `rotate(${-60 * (index + debounceOrder)}deg) translateY(-100vh)`,
  };

  return (
    <li className={styles.post} style={style}>
      <div className={styles.contentWrap}>
        <div className={styles.img} />
        <p>MOMIN - {item}Team Project</p>
        <p>Apr 2022</p>
      </div>
    </li>
  );
};

export default Post;
