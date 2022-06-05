import { GithubIcon, VelogIcon } from 'assets/svgs';
import styles from './about.module.scss';

const About = () => (
  <section className={styles.about}>
    <div className={styles.content}>
      <section className={styles.introduce}>
        <p className={styles.hello}>
          안녕하세요 😀 <br />
          프론트엔드 개발자 박상원입니다.
        </p>
        <p className={styles.goal}>
          현재 부산에서 프론트엔드 개발을 배우고 있으며, 더 나은 사용자 경험을 제공하는 것에 흥미를 느낍니다. 지금보다
          더 나은 결과를 위해서 계속해서 공부 중이며, 빠르게 도전하고 실패하는 개발자로 성장하고 싶습니다.
        </p>
        <ul className={styles.lists}>
          <li>현재 타입스크립트와 ESLint를 적용한 개발을 배우고 있습니다.</li>
          <li>가독성이 좋은 코드를 지향합니다.</li>
          <li>인터랙션을 만드는 것에 흥미를 느낍니다.</li>
          <li>다수의 팀프로젝트 경험을 가지고 있습니다.</li>
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <div>
          <h3>언어</h3>
          <span>JavaScript / TypeScript</span>
          <h3>프론트엔드</h3>
          <span>React, Redux, Styled-Component, SASS</span>
        </div>
      </section>
      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>원티드 프리온보딩 (2022.05 ~ 2022.06)</h3>
            <p>
              타입스크립트와 ESLint를 적용한 개발을 배울 수 있었습니다. 이전에는 주어진 문제를 해결하기 급급했다면, 해당
              코스를 통해, 프론트엔드는 가독성이라는 말에 공감하게 되었습니다. ESLint와 타입스크립트를 적용하면서, 작은
              기능이라도 이해가능한 코드를 작성하려고 노력하였습니다. 또 리코일, 리덕스툴킷, 리액트쿼리 등의 기술을
              빠르게 배워서 간단하게나마 적용해볼 수 있었습니다.
            </p>
          </li>
          <li>
            <h3>항해 부트캠프 (2022.01 ~ 2022.04)</h3>
            <p>
              리액트를 주특기로 99일 동안 4개의 팀프로젝트와 3개의 개인과제를 진행하며, 몰입도 있는 경험을 하였습니다.
              짧은 기간동안 여러 팀프로젝트를 경험하며, 어떻게든 문제를 해결하고, 협업하는 방법을 배울 수 있었습니다. 그
              결과로 동료평가에서 7점 만점에 약 6.9 점을 받을 수 있었습니다.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Other Experience</h2>
        <ul>
          <li>
            <h3>부산대학교 건축학과 졸업 (2014.03 ~ 2022.02)</h3>
          </li>
          <li>
            <h3>현대건설 인턴 (2021.06 ~ 2021.08)</h3>
          </li>
          <li>
            <h3>오알크루 스타트업 인턴 (2020.07 ~ 2020.08)</h3>
          </li>
        </ul>
      </section>
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
    </div>
  </section>
);

export default About;
