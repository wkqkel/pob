interface ILinks {
  page?: string;
  github: string;
}

export interface IProjectList {
  id: string;
  title: string;
  subTitle: string;
  date: string;
  skills: string;
  role: string[];
  links: ILinks;
}

export const ProjectList = [
  {
    id: 'HTGATHER',
    title: '홈트게더',
    subTitle: '비대면 홈트레이닝 서비스',
    date: '22.02~04, 6주',
    skills: 'React, Redux, Styled-components, socket.io, webRTC, github-actions',
    role: [
      'FE팀을 리딩하며, 기획부터 배포까지 백엔드, 디자이너와의 협업 진행 경험',
      '메인페이지 및 디테일페이지 연결(게시물CRUD, 비밀방, 타이머 동기화, 추천영상 등)',
      'react-player을 이용한 유튜브 영상 ',
      '사용자 경험 개선을 위한 socket.io를 이용한 부가기능 및 이탈처리',
      '공통 UI 컴포넌트 개발을 통한 생산성 증대(캘린더, 드롭다운, 배너 등)',
      '애자일 업무 진행을 위한 Github Actions 배포자동화 환경 구축',
      'https 배포환경 구축 (AWS S3, Route53, Cloudfront)',
    ],
    links: { page: 'https://htgather.com/', github: 'https://github.com/htgather/Team-htgather-frontend.git' },
  },
  {
    id: 'GRIP',
    title: 'Movie App',
    subTitle: '영화검색, 즐겨찾기 사이트',
    date: '22.05, 1주',
    skills: 'React, TypeScript, Scss, Recoil',
    role: [
      'react-intersection-observer을 이용한 무한스크롤 구현',
      'storejs를 활용한 즐겨찾기 기능 구현',
      'Portal을 이용한 모달창 구현',
    ],
    links: { page: 'https://grip-solo.netlify.app/', github: 'https://github.com/wkqkel/POB_SOLO-grip' },
  },
  {
    id: 'MOA_DATA',
    title: 'Dashboard',
    subTitle: '어드민페이지',
    date: '22.05, 3일',
    skills: 'React, TypeScript, Scss, Recoil',
    role: [
      'victory를 이용한 차트 데이터 적용 및 그래프 커스텀',
      '더미 데이터 차트 그래프 데이터 형식으로 가공',
      '조회기간 퀵버튼 구현',
      '평균 BPM 표시 및 총 걸음수 표시',
    ],
    links: { page: 'https://moadata7.netlify.app/login', github: 'https://github.com/wkqkel/POB_TEAM-Moadata-7.git' },
  },
  {
    id: 'HUMANSCAPE',
    title: 'Recommand',
    subTitle: '검색어 추천',
    date: '22.05, 3일',
    skills: 'React, TypeScript, Scss, Redux-toolkit, React-Query',
    role: [
      'react-query를 사용해 로컬 캐싱 구현',
      'Redux를 사용해 추천 검색어 리스트 index 상태 관리로 키보드 이동 구현',
      'mark 태그를 사용해 일치하는 글차 bold 처리',
    ],
    links: {
      page: 'https://7b.netlify.app/',
      github: 'https://github.com/wanted-pre-onboarding-7team/Humanscape-7B',
    },
  },
  {
    id: 'VELOG',
    title: 'VELOG',
    subTitle: '벨로그 클론코딩',
    date: '22.02, 1주',
    skills: 'React, Redux, Styled-components, AWS S3, Route 53',
    role: [
      'Grid와 미디어쿼리를 이용한 반응형 메인페이지 및 작성페이지 담당',
      'Toast-UI-Editor를 활용한 게시물 CRUD 및 이미지업로드, 좋아요 기능 구현',
    ],
    links: { page: 'https://youtu.be/qhXHzetPxRo', github: 'https://github.com/wkqkel/HANGHAE_TEAM-velogClone' },
  },
  {
    id: 'MOMIN',
    title: '모임의 민족',
    subTitle: '소모임 사이트',
    date: '22.02, 1주',
    skills: 'React, Redux, Styled-components, AWS S3, Route 53',
    role: ['메인페이지 및 작성페이지 담당(게시물 CRUD, 카테고리 및 참여하기 기능 구현)'],
    links: { page: 'https://youtu.be/q4Bl6uqkuXc', github: 'https://github.com/wkqkel/HANGHAE_TEAM-momin' },
  },
];
