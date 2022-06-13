import { useNavigate, useParams } from 'react-router-dom';

import { ProjectList } from './ProjectDetailList';

import { GithubIcon, PlayIcon } from 'assets/svgs';

import styles from './detail.module.scss';

const Detail = () => {
  const navigate = useNavigate();
  const { projectName } = useParams();

  const project = ProjectList.filter((item) => item.id === projectName)[0];

  const onClick = () => {
    navigate(-1);
  };

  return (
    <section className={styles.detail}>
      <div className={styles.contentWrap}>
        <button type='button' onClick={onClick} className={styles.closeButton}>
          X
        </button>

        <h1>{project.title}</h1>

        <ul className={styles.subtitle}>
          <li>{project.subTitle}</li>
          <li>{project.date}</li>
        </ul>

        <h2>Skills</h2>
        <p>{project.skills}</p>

        <h2>Role</h2>
        <ul className={styles.role}>
          {project.role.map((item, index) => {
            const key = `project-${index}`;
            return <li key={key}>{item}</li>;
          })}
        </ul>

        <h2>Links</h2>
        <div className={styles.links}>
          <a href={project.links.page} target='_blank' rel='noopener noreferrer'>
            <PlayIcon />
          </a>
          <a href={project.links.github} target='_blank' rel='noopener noreferrer'>
            <GithubIcon className={styles.github} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Detail;
