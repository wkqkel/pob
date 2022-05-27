import HEALTH_INFO from 'assets/data/healthInfo.json'

const MY_MAX_SCORE = HEALTH_INFO.wxcResultMap.wMymaxHscore

const HEALTH_POINT_NAME = [
  { dataKey: 'resBMI', name: '체질량지수' },
  { dataKey: 'resBloodPressure', name: '혈압' },
  { dataKey: 'resTotalCholesterol', name: '총콜레스테롤' },
  { dataKey: 'smkQty', name: '흡연' },
  { dataKey: 'resFastingBloodSuger', name: '식전혈당' },
  { dataKey: 'drnkQty', name: '음주' },
  { dataKey: 'exerciQty', name: '운동량' },
  { dataKey: 'resGFR', name: '신사구체여과율' },
]

export { MY_MAX_SCORE, HEALTH_POINT_NAME }
