export interface IWork {
  id: number;
  name: string;
  category: string;
  date: string;
  link: string;
}

export const WORKS = [
  {
    id: 1,
    name: 'HTGATHER',
    category: 'Team',
    date: 'Apr 2022',
    link: 'https://github.com/htgather/Team-htgather-frontend.git',
  },
  { id: 2, name: 'GRIP', category: 'Solo', date: 'Apr 2022', link: 'https://github.com/wkqkel/POB_SOLO-grip' },
  {
    id: 3,
    name: 'MOA_DATA',
    category: 'Team',
    date: 'May 2022',
    link: 'https://github.com/wkqkel/POB_TEAM-Moadata-7.git',
  },
  {
    id: 4,
    name: 'HUMANSCAPE',
    category: 'Team',
    date: 'May 2022',
    link: 'https://github.com/wanted-pre-onboarding-7team/Humanscape-7B',
  },
  {
    id: 5,
    name: 'VELOG',
    category: 'Team',
    date: 'Feb 2022',
    link: 'https://github.com/wkqkel/HANGHAE_TEAM-velogClone',
  },
  { id: 6, name: 'MOMIN', category: 'Team', date: 'Feb 2022', link: 'https://github.com/wkqkel/HANGHAE_TEAM-momin' },
];
