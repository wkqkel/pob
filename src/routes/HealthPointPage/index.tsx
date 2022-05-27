import MyHealth from './MyHealth'

import styles from './healthPointPage.module.scss'
import HealthComparePage from './HealthComparePage'

import OCare from './OCare'

const HealthPointPage = () => {
  return (
    <div className={styles.page}>
      <MyHealth />
      <HealthComparePage />
      <OCare />
    </div>
  )
}

export default HealthPointPage
