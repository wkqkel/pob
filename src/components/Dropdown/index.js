import styles from './Dropdown.module.scss'
import { useState, useEffect, useRef } from 'react'
import { ArrowIcon, SearchIcon, CheckIcon } from '../../assets/svgs'

const itemList = ['All Fruits', 'Banana', 'Apple', 'Mango', 'Grape', 'Orange', 'Watermelon']

export default function Dropdown() {
  const [isDrop, setIsDrop] = useState(false)
  const [clicked, setClicked] = useState('Select Options')
  const [curList, setCurList] = useState(itemList)
  const dropdownRef = useRef()

  function filter(e) {
    setCurList(itemList.filter((item) => item.includes(e.target.value)))
  }

  const handleItemClick = (e) => {
    setClicked(e.target.id)
    setIsDrop(false)
  }

  const handleDropClick = () => {
    setIsDrop(!isDrop)
  }

  const handleCloseModal = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsDrop(false)
      setCurList(itemList)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleCloseModal)
    return () => window.removeEventListener('click', handleCloseModal)
  }, [])

  return (
    <div className={styles.wrap} ref={dropdownRef}>
      <button type='button' className={styles.valueBox} onClick={handleDropClick}>
        <input type='text' readOnly value={clicked} />
        <ArrowIcon />
      </button>
      {isDrop && (
        <div className={styles.dropdown}>
          <div className={styles.searchWrap}>
            <SearchIcon className={styles.searchIcon} />
            <input type='text' onChange={filter} />
          </div>
          <ul onClick={handleItemClick} role='presentation'>
            {curList.map((item) => (
              <li id={item}>
                {item} <CheckIcon className={styles.checkIcon} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
