import styles from './healthPointCard.module.scss'

import { ResBloodPressureIcon } from 'assets/svgs'

const HealthPointCard = () => {
  return (
    <section className={styles.card}>
      <h1 className={styles.titleNo}>01</h1>
      <h2 className={styles.title}>체질량지수</h2>
      <ResBloodPressureIcon className={styles.icon} />
      <p>
        현재 체질량 지수 26.6 kg/m² 이며 <br />
        <strong>경도 비만</strong>입니다.
      </p>
      <p className={styles.nomalRange}>정상범위: 20 ~ 22kg/m²</p>
      <ul className={styles.tagList}>
        <li>#비만</li>
        <li>#비만</li>
        <li>#비만</li>
      </ul>
      <div className={styles.careDesc}>
        <h3 className={styles.careTitle}>이렇게 관리해 보세요!</h3>
        <ul className={styles.descList}>
          <li>당뇨병으로 진행을 예방하기 위해서 관련된 생활습관을 교정합니다.</li>
          <li>당뇨병으로 진행을 예방하기 위해서 관련된 생활습관을 교정합니다.</li>
        </ul>
      </div>
    </section>
  )
}

export default HealthPointCard
