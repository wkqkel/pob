import { IMainSection } from '../MainSectionList';

interface IProps {
  section: IMainSection;
}

const MainSection = ({ section }: IProps) => (
  <section>
    <h2>{section.title}</h2>
    <ul>
      {section.list.map((item) => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default MainSection;
