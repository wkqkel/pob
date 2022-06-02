## 1. 걸음수 데이터 정렬

데이터를 시간 오름차순으로 정렬해서, 그래프에 시간순으로 데이터를 시각화 함
일별로 보여질 '일주일','전체' 기간에는 부족한 데이터를 채우기 위해 분할된 데이터를 보여줬다

## 2. 퀵버튼 구현
사용자가 클릭한 버튼에 따라 종료일을 설정하고, 이를 기준으로 데이터를 가공

dayjs라이브러리의 isSameOrBefore를 사용해 마지막 날짜 기준으로 날짜비교

## 3. 전체 걸음수 구하기

json파일별 제일 늦은시간의 steps값을 구해서 더해주었다

```tsx
const getLastStepData = (arr: IData[]) => {
  const [data] = arr.sort((a, b) => b.seq - a.seq)
  return data
}

const totalStep = totalStepData[`member${userInfo.member_seq}`]
.filter((item) => {
  return dayjs(item.crt_ymdt.split(' ')[0]).isSameOrBefore(dayjs(endDay))
})
.reduce((a, b) => {
  return a + b.steps
}, 0)
```

## 4. 마크업
멘토님의 피드백을 받아 마크업 리팩토리 공동작업
