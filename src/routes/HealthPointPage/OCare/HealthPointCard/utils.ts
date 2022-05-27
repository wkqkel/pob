import HEALTH_INFO from 'assets/data/healthInfo.json'

interface IObj {
  [key: string]: string
}

const myParamMap: IObj = HEALTH_INFO.wxcResultMap.paramMap
const myBoj: IObj = HEALTH_INFO.wxcResultMap.boj

const getCurrentFigure = (dataKey: string) => myParamMap[dataKey]
const getCurrentStatus = (dataKey: string) => myBoj[dataKey].split(' - ')[0]
const getCareDesc = (dataKey: string) => myBoj[dataKey].split(' - ').slice(1)
const getTagList = (dataKey: string) => HEALTH_INFO.healthTagList.find((item) => item.tagId === dataKey)

const getColor = (dataKey: string) => {
  const targetValue = {
    resBMI: '#3cce3c',
    resBloodPressure: '#c63de8',
    resTotalCholesterol: '#738dfc',
    smkQty: '#529afc',
    resFastingBloodSuger: '#c63de8',
    drnkQty: '#feb851',
    exerciQty: '#74d3c7',
    resGFR: '#f9b4b4',
  }[dataKey]

  return targetValue
}

const getUnit = (dataKey: string) => {
  const targetValue = {
    resBMI: 'kg/m²',
    resBloodPressure: 'mmHg',
    resTotalCholesterol: 'mg/dL',
    smkQty: '',
    resFastingBloodSuger: 'mg/dL',
    drnkQty: '',
    exerciQty: '',
    resGFR: 'mL/min',
  }[dataKey]

  return targetValue
}

const getNormalRange = (dataKey: string) => {
  const targetValue = {
    resBMI: '정상 : 18.5 ~ 22.9 kg/m²',
    resBloodPressure: '정상 : 이완 60~79 / 수축 90~119 mmHg',
    resTotalCholesterol: '정상 : 200 mg/dL 이하',
    smkQty: '',
    resFastingBloodSuger: '정상 : 69~99 mg/dL',
    drnkQty: '',
    exerciQty: '',
    resGFR: '정상 : 60 mL/min 이상',
  }[dataKey]

  return targetValue
}

export { getCurrentFigure, getCurrentStatus, getColor, getTagList, getUnit, getNormalRange, getCareDesc }
