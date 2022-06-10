import MainSectionList from './MainSectionList';

import IntroduceSection from './Section/IntroduceSection';
import MainSection from './Section/MainSection';
import LinkSection from './Section/LinkSection';

import styles from './about.module.scss';

const About = () => (
  <section className={styles.about}>
    <div className={styles.content}>
      <IntroduceSection />
      {MainSectionList.map((section) => (
        <MainSection key={section.title} section={section} />
      ))}
      <LinkSection />
    </div>
  </section>
);

export default About;
