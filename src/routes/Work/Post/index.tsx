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
        <p className={styles.title}>MOMIN - {item}Team Project</p>
        <p className={styles.desc}>Apr 2022</p>
        <button type='button' className={styles.readMore}>
          READ MORE +
        </button>
      </div>
    </li>
  );
};

export default Post;
