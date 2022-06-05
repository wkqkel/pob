import htgather from 'assets/gifs/htgather.gif';
import humanscape from 'assets/gifs/humanscape.gif';
import moadata from 'assets/gifs/moadata.gif';
import momin from 'assets/gifs/momin.gif';
import velog from 'assets/gifs/velog.gif';

export interface IProject {
  id: number;
  name: string;
  sort: string;
  date: string;
  image: any;
  link: string;
}

export const ProjectList = [
  {
    id: 1,
    name: 'HTGATHER',
    sort: 'Team',
    date: 'Apr 2022',
    image: htgather,
    link: 'https://github.com/htgather/Team-htgather-frontend.git',
  },
  {
    id: 2,
    name: 'GRIP',
    sort: 'Solo',
    date: 'Apr 2022',
    image: htgather,
    link: 'https://github.com/wkqkel/POB_SOLO-grip',
  },
  {
    id: 3,
    name: 'MOA_DATA',
    sort: 'Team',
    date: 'May 2022',
    image: moadata,
    link: 'https://github.com/wkqkel/POB_TEAM-Moadata-7.git',
  },
  {
    id: 4,
    name: 'HUMANSCAPE',
    sort: 'Team',
    date: 'May 2022',
    image: humanscape,
    link: 'https://github.com/wanted-pre-onboarding-7team/Humanscape-7B',
  },
  {
    id: 5,
    name: 'VELOG',
    sort: 'Team',
    date: 'Feb 2022',
    image: velog,
    link: 'https://github.com/wkqkel/HANGHAE_TEAM-velogClone',
  },
  {
    id: 6,
    name: 'MOMIN',
    sort: 'Team',
    date: 'Feb 2022',
    image: momin,
    link: 'https://github.com/wkqkel/HANGHAE_TEAM-momin',
  },
];
