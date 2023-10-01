import styles from './Tab.module.scss'

export default function Tab() {
  return (
    <div className={styles.tabs}>
      <input type='radio' id='1' name='tab' defaultChecked />
      <label htmlFor='1' className={styles.tab}>
        김밥
      </label>
      <input type='radio' id='2' name='tab' />
      <label htmlFor='2' className={styles.tab}>
        참치
      </label>
      <input type='radio' id='3' name='tab' />
      <label htmlFor='3' className={styles.tab}>
        라면
      </label>
      <div className={styles.slider} />
    </div>
  )
}
