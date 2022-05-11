import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import cx from 'classnames'

import { bookmarkMovieList } from 'states/movie'
import { ISearchItem } from 'types/movie.d'

import styles from './movieItem.module.scss'
import defaultImg from '../../assets/grip.png'
import { BookmarkIcon } from 'assets/svgs'

interface Props {
  item: ISearchItem
  // setIsOpenModal: Function
}

const MovieItem = ({ item }: Props) => {
  const [isMarked, setIsMarked] = useState(false)
  const [bookmarkedList, setBookmarkedList] = useRecoilState(bookmarkMovieList)

  const handleClick = () => {
    if (isMarked) window.confirm('제거하시겠습니까')
    else window.confirm('추가하시겠습니까')
  }

  useEffect(() => {
    bookmarkedList.map((markedItem) => {
      if (markedItem.imdbID === item.imdbID) setIsMarked(true)
    })
  }, [])

  return (
    // 프레젠테이션말고 어떤거?
    <li onClick={handleClick} className={styles.movieItem} role='presentation'>
      {item.Poster === 'N/A' ? <img src={defaultImg} alt='no poster' /> : <img src={item.Poster} alt='poster' />}
      <div>
        <dt>{item.Title}</dt>
        <dd>
          {item.Type} &#183; {item.Year}
        </dd>
      </div>
      <BookmarkIcon className={cx({ [styles.isMarked]: isMarked })} />
    </li>
  )
}

export default MovieItem
