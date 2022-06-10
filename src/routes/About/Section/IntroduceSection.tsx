import styles from '../about.module.scss';

const IntroduceSection = () => (
  <section className={styles.introduce}>
    <p className={styles.hello}>
      안녕하세요 😀 <br />
      프론트엔드 개발자 박상원입니다.
    </p>
    <p className={styles.goal}>
      현재 부산에서 프론트엔드 개발을 배우고 있으며, 더 나은 사용자 경험을 제공하는 것에 흥미를 느낍니다. 지금보다 더
      나은 결과를 위해서 계속해서 공부 중이며, 빠르게 도전하고 실패하는 개발자로 성장하고 싶습니다.
    </p>
    <ul className={styles.lists}>
      <li>현재 타입스크립트와 ESLint를 적용한 개발을 배우고 있습니다.</li>
      <li>가독성이 좋은 코드를 지향합니다.</li>
      <li>인터랙션을 만드는 것에 흥미를 느낍니다.</li>
      <li>다수의 팀프로젝트 경험을 가지고 있습니다.</li>
    </ul>
  </section>
);

export default IntroduceSection;
