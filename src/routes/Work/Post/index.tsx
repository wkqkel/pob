import styles from './post.module.scss';

interface IProps {
  index: number;
  curOrder: number;
}

const Post = ({ index, curOrder }: IProps) => {
  const style = {
    transform: `rotate(${-60 * (index + curOrder)}deg) translateY(-100vh)`,
  };

  return (
    <li className={styles.post} style={style}>
      <div className={styles.contentWrap}>
        <div className={styles.img} />
        <p>MOMIN - Team Project</p>
        <p>Apr 2022</p>
      </div>
    </li>
  );
};

export default Post;
