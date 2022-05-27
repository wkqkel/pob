import styles from './oCare.module.scss'
import HealthPointCard from './HealthPointCard'

const OCare = () => {
  return (
    <section className={styles.oCare}>
      <h1 className={styles.title}>맞춤 건강 관리</h1>
      <p className={styles.desc}>
        오케어와 함께 건강 관리를 해보세요.
        <br />
        건강점수를 <strong>최대 000점</strong>까지 올릴 수 있어요.
      </p>
      <HealthPointCard />
      <HealthPointCard />
      <HealthPointCard />
    </section>
  )
}

export default OCare
