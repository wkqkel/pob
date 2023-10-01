import { useState } from 'react'
import styles from './Input.module.scss'
import { CheckCircleIcon, VisibilityIcon, VisibilityOffIcon } from '../../assets/svgs'
import cx from 'classnames'

const EMAIL_REGEX = /^(?![\w\\.@]*\.\.)(?![\w\\.@]*\.@)(?![\w\\.]*@\.)\w+[\w\\.]*@[\w\\.]+\.\w{2,}$/

export default function Tab() {
  const [isVisible, setIsVisible] = useState(false)
  const [emailValid, setEmailValid] = useState(false)

  const handleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const handleEmailCheck = (e) => {
    if (EMAIL_REGEX.test(e.target.value)) setEmailValid(true)
    else setEmailValid(false)
  }

  return (
    <div className={styles.wrap}>
      <span>E-mail</span>
      <div className={styles.inputBox}>
        <input type='text' placeholder='Email' onChange={handleEmailCheck} />
        <CheckCircleIcon className={cx({ [styles.valid]: emailValid })} />
      </div>
      <span>Password</span>
      <div className={styles.inputBox}>
        <input type={isVisible ? 'text' : 'password'} placeholder='Password' />
        <button type='button' onClick={handleVisibility}>
          {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </div>
    </div>
  )
}
