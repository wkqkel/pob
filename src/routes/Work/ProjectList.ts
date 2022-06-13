import htgather from 'assets/gifs/htgather.gif';
import grip from 'assets/gifs/grip.gif';
import humanscape from 'assets/gifs/humanscape.gif';
import moadata from 'assets/gifs/moadata.gif';
import momin from 'assets/gifs/momin.gif';
import velog from 'assets/gifs/velog.gif';

export interface IProject {
  id: string;
  sort: string;
  date: string;
  image: string;
}

export const ProjectList: IProject[] = [
  {
    id: 'HTGATHER',
    sort: 'Team',
    date: 'Apr 2022',
    image: htgather,
  },
  {
    id: 'GRIP',
    sort: 'Solo',
    date: 'Apr 2022',
    image: grip,
  },
  {
    id: 'MOA_DATA',
    sort: 'Team',
    date: 'May 2022',
    image: moadata,
  },
  {
    id: 'HUMANSCAPE',
    sort: 'Team',
    date: 'May 2022',
    image: humanscape,
  },
  {
    id: 'VELOG',
    sort: 'Team',
    date: 'Feb 2022',
    image: velog,
  },
  {
    id: 'MOMIN',
    sort: 'Team',
    date: 'Feb 2022',
    image: momin,
  },
];
