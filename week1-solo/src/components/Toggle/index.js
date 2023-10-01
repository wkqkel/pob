import styles from './Toggle.module.scss'

export default function Toggle() {
  return (
    <div className={styles.wrap}>
      <input type='checkbox' />
      <div className={styles.customCheckbox} />
      <span>ON</span>
      <span>OFF</span>
    </div>
  )
}
