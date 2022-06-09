import { IProject } from 'types/project';

import htgather from 'assets/gifs/htgather.gif';
import humanscape from 'assets/gifs/humanscape.gif';
import moadata from 'assets/gifs/moadata.gif';
import momin from 'assets/gifs/momin.gif';
import velog from 'assets/gifs/velog.gif';

export const ProjectList: IProject[] = [
  {
    id: 1,
    name: 'HTGATHER',
    sort: 'Team',
    date: 'Apr 2022',
    image: { src: htgather, alt: '홈트게더' },
    link: 'https://github.com/htgather/Team-htgather-frontend.git',
  },
  {
    id: 2,
    name: 'GRIP',
    sort: 'Solo',
    date: 'Apr 2022',
    image: { src: htgather, alt: '그립' },
    link: 'https://github.com/wkqkel/POB_SOLO-grip',
  },
  {
    id: 3,
    name: 'MOA_DATA',
    sort: 'Team',
    date: 'May 2022',
    image: { src: moadata, alt: '모아데이타' },
    link: 'https://github.com/wkqkel/POB_TEAM-Moadata-7.git',
  },
  {
    id: 4,
    name: 'HUMANSCAPE',
    sort: 'Team',
    date: 'May 2022',
    image: { src: humanscape, alt: '휴먼스케이프' },
    link: 'https://github.com/wanted-pre-onboarding-7team/Humanscape-7B',
  },
  {
    id: 5,
    name: 'VELOG',
    sort: 'Team',
    date: 'Feb 2022',
    image: { src: velog, alt: '벨로그' },
    link: 'https://github.com/wkqkel/HANGHAE_TEAM-velogClone',
  },
  {
    id: 6,
    name: 'MOMIN',
    sort: 'Team',
    date: 'Feb 2022',
    image: { src: momin, alt: '모민' },
    link: 'https://github.com/wkqkel/HANGHAE_TEAM-momin',
  },
];
