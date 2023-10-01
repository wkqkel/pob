### 담당 개발 내용

회원 관리 페이지를 담당해 구현

회원 목록을 조건에 맞게 필터링, 해당 회원의 상세 페이지로 이동

```tsx
// filteredList 상태를 recoil을 사용해 전역으로 관리
const setFilteredList = useSetRecoilState(filteredListState)
const resetFilteredList = useResetRecoilState(filteredListState)

const handleSearchClick = () => {
  if (!memberId && !memberSeq && !startDate && !endDate) {
    resetFilteredList()

    return
  }

  let filteredList = MEMBER_LIST

  if (memberId) {
    filteredList = filteredList.filter((member) => member.id.toLowerCase().includes(memberId.toLowerCase()))
  }

  if (memberSeq) {
    filteredList = filteredList.filter((member) => member.member_seq.includes(memberSeq))
  }

  if (startDate && endDate) {
    filteredList = filteredList.filter((member) => {
      const memberDate = dayjs(member.crt_ymdt).format('YYYY-MM-DD')

      return memberDate >= startDate && memberDate <= endDate
    })
  }

  setFilteredList(filteredList)
}
```

### 고민한 부분

**회원 검색 > 조회 기간**

- 요구 사항 해석
  - [해석 1] 회원 가입일을 기준으로 필터링된 회원 목록을 보여준다.
  - [해석 2] 상세 페이지에서 보여줄 데이터 범위를 입력 받아 넘겨준다.
  - 회원 검색에 해당하는 기능은 [해석 1] 이라고 판단, 그에 따른 `input`과 `button` 기능 고민
- 오늘, 1주일, 전체 버튼의 날짜 설정
  - [오늘]: 실제 당일 날짜로 기간 설정
  - [일주일]: 당일 날짜의 일주일 전부터 당일 날짜까지 범위 설정
  - [전체]: 더미 데이터의 회원 중, 가입 날짜가 가장 빠른 회원의 날짜부터 실제 당일 날짜까지 범위 설정
- 날짜 검색 창에 사용자 입력 부분
  - 기간 설정 버튼 클릭을 통해서만 입력 가능하도록 설정
  - 예외 처리 부분에서 사용자 입력 값을 `YYYY-MM-DD`와 같이 자동으로 형식을 변환하거나, 시작 날짜와 끝 날짜 중 하나만 입력 된 경우 등 많은 예외 처리가 발생. 이를 해결하기 위해 `datapicker` 라이브러리 활용 및 `input`의 `date` 타입 활용, 직접 로직 작성 등 해결책 고민 중, 로직을 통한 예외 처리로 결정. 하지만 팀원들과 회의를 통해 기획에 의도와 어긋날 수 있다고 최종적으로 판단, 상세 페이지와 버튼 기능을 통일하도록 결정하여 입력이 불가능하도록 설정

**페이지 이동**

```tsx
const navigate = useNavigate()

const handleManageClick = (e: MouseEvent<HTMLButtonElement>) => {
  const { memberSeq } = e.currentTarget.dataset

  navigate(`/member/manage/${memberSeq}`)
}
```

- 관리 페이지로 넘어가는 방법
  - 동적 라우팅 - `useNavigate`를 이용해 회원 번호에 해당하는 디테일 페이지로 이동
  - 그 후, 상세 페이지에서는 URL의 패스 파라미터를 `useParams`로 가져와 해당 회원의 데이터를 가져오는데 사용.
- 페이지 새로고침 시 회원 목록 상태
  - 전체 회원 목록 노출

```tsx
useMount(() => resetFilteredList())
```

### 구현

- [x] 페이지 접속 시 검색 결과 테이블에 전체 회원 노출

- [x] 검색

  - [x] 로그인, 회원번호, 날짜를 이용해 회원 목록 검색

  - [x] 모두 공백인 경우 전체 회원 목록 노출

  - [x] 세 개의 항목 중 한 가지라도 입력값이 있는 경우, 해당 입력값이 포함된 회원 목록 노출

  - [x] 검색 결과 없을 시, 테이블에 ‘결과 없음’ 이미지 노출

- [x] 필터 초기화

  - [x] 입력 값이 비워지고 전체 회원 노출

- [x] 관리

  - [x] 해당 회원의 상세 페이지로 이동

### 회고

프로젝트를 시작하며, 애자일 방법론을 적용하여 프로젝트 스프린트 기간을 설정하여 효율적으로 작업해보았다. 또, 요구 사항 해석과 기능 구현에서 고민한 부분을 함께하는 팀원들과 끊임없이 소통하고 다양한 방법을 적용해보며 완성을 하였다. 그 결과, 프로젝트 진행 사항에 대한 빠른 파악이 가능했고 이로 인해 협업과 소통의 중요성을 느끼게 된 프로젝트였다.
