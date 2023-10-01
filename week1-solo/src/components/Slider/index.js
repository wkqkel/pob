import styles from './Slider.module.scss'
import { useState, useRef } from 'react'
import cx from 'classnames'

export default function Slider() {
  const [value, setValue] = useState(50)
  const rangeArray = [1, 25, 50, 75, 100]
  const inputTag = useRef()

  const handleRange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.wrap}>
      <input type='text' readOnly value={`${value} %`} className={styles.screen} />
      <input type='range' onChange={handleRange} ref={inputTag} min={1} />
      <div className={styles.circles}>
        {rangeArray.map((item) => (
          <div key={`circle-${item}`} className={cx(styles.circle, { [styles.passed]: value > item })} />
        ))}
      </div>
      <div className={styles.btnWrap}>
        {rangeArray.map((item) => (
          <button
            type='button'
            className={cx(styles.btn, { [styles.toLeft]: item === 25 }, { [styles.toRight]: item === 75 })}
            key={`rangeBtn-${item}`}
            onClick={() => {
              inputTag.current.value = item
              setValue(item)
            }}
          >
            {item} %
          </button>
        ))}
      </div>
    </div>
  )
}
