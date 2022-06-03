import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.scss';
import cx from 'classnames';

interface ILink {
  name: string;
  to: string;
}

interface IProps {
  onClick: () => void;
  link: ILink;
}

const Link = ({ onClick, link }: IProps) => {
  return (
    <li>
      <button type='button' onClick={onClick}>
        <NavLink to={link.to} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
          {link.name}
        </NavLink>
      </button>
    </li>
  );
};

export default Link;
