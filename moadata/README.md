# 원티드 프리온보딩 모아데이타

[✔️ 배포주소](https://moadata7.netlify.app/)<br />
[✔️ Test Case 정의서](https://docs.google.com/spreadsheets/d/1Klwgqra7tQh98birDtgOmrhbBilt5Tb-14IHEc7Pt7g/edit#gid=0)

 테스트 계정
- id:admin7175
- password:qwer1234!@#
<br />

## 👬 **팀원**

- 유재민, 박상원, 배수인, 설혜린, 조석희, 양이진, 남효현, 이득규, 한지선

<br />

## 📅 **개발 기간**

- 2022년 5월 28일 ~ 2022년 5월 30일

<br />

## 🔧 **기술스택**

- Typescript, React, Sass <br />

<br />

## **💻 설치 및 실행 방법**

1. yarn 설치

```
 npm i yarn
```

2. 레포지토리 클론

```
git clone git@https://github.com/wanted-pre-onboarding-7team/Moadata-7.git
```

3. dependencies 설치

```
yarn install
```

4. env 설정 

```
REACT_APP_ADMIN_ID=관리자 계정 아이디
REACT_APP_ADMIN_PW=관리자 계정 비밀번호
```

5. 실행

```
yarn start
```

## 📖 **과제 구현 목록 및 사용 방법**

<br />

 
### **로그인 페이지**
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/90893364/171115080-602ae031-4973-4f88-9de4-0ecd92fc5fb4.gif)


- [x] 아이디/비밀번호 각 Validation 설계
- [x] 아이디/비밀번호 Validation 만족 시 로그인 버튼 활성화
- [x] 로그인 버튼 클릭시 관리자 계정 일치 여부 조회
- [x] 관리자 계정과 일치 시 홈 화면으로 이동
- [x] 관리자 계정과 불일치 시 팝업(슬라이드업 애니메이션 추가) 노출

<br />

### **회원 관리 페이지**
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/90893364/171113159-0a490f55-625d-4e94-a00a-d8f5a7a610e7.gif)


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

<br />

### **회원 상세 페이지**
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/90893364/171113872-aade606f-d0a7-4336-83d5-a079d69915bc.gif)


- [x] 회원 상세 정보 표출 

- [x] 심박수 , 걸음수 그래프
    - [x] 더미 데이터 차트 그래프 데이터 형식으로 변경
    - [x] 차트 데이터 적용 및 그래프 커스텀, 
    - [x] 조회기간 적용
    - [x] 평균 BPM 표시 및 총 걸음수 표시
    - [x] 회원관리 버튼 클릭 시 이전 페이지로 이동

- [x] 로그인 데이터 로컬스토리지 적용
  - [x] 만료시간 적용(7시간 경과 후 접속시 로그인 페이지로 이동 및 스토리지 삭제)
  - [x] 로그아웃시 로컬 스토리지 삭제
<br />
