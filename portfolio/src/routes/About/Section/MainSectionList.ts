interface IItem {
  title: string;
  desc: string;
}

export interface IMainSection {
  title: string;
  list: IItem[];
}

const MainSectionList: IMainSection[] = [
  {
    title: 'Skills',
    list: [
      { title: '언어', desc: 'JavaScript / TypeScript' },
      { title: '프론트엔드', desc: 'React, Redux, Styled-Component, SASS' },
    ],
  },
  {
    title: 'Experience',
    list: [
      {
        title: '원티드 프리온보딩 (2022.05 ~ 2022.06)',
        desc: '타입스크립트와 ESLint를 적용한 개발을 배울 수 있었습니다. 이전에는 주어진 문제를 해결하기 급급했다면, 해당 코스를 통해, 프론트엔드는 가독성이라는 말에 공감하게 되었습니다. ESLint와 타입스크립트를 적용하면서, 작은 기능이라도 이해가능한 코드를 작성하려고 노력하였습니다. 또 리코일, 리덕스툴킷, 리액트쿼리 등의 기술을 빠르게 배워서 간단하게나마 적용해볼 수 있었습니다.',
      },
      {
        title: '항해 부트캠프 (2022.01 ~ 2022.04)',
        desc: '리액트를 주특기로 99일 동안 4개의 팀프로젝트와 3개의 개인과제를 진행하며, 몰입도 있는 경험을 하였습니다. 짧은 기간동안 여러 팀프로젝트를 경험하며, 어떻게든 문제를 해결하고, 협업하는 방법을 배울 수 있었습니다. 그 결과로 동료평가에서 7점 만점에 약 6.9 점을 받을 수 있었습니다.',
      },
    ],
  },
  {
    title: 'Other Experience',
    list: [
      {
        title: '부산대학교 건축학과 졸업 (2014.03 ~ 2022.02)',
        desc: '',
      },
      {
        title: '현대건설 인턴 (2021.06 ~ 2021.08)',
        desc: '',
      },
      { title: '오알크루 스타트업 인턴 (2020.07 ~ 2020.08)', desc: '' },
    ],
  },
];

export default MainSectionList;
