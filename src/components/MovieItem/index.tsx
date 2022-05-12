import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import cx from 'classnames'

import { bookmarkMovieList } from 'states/movie'
import { ISearchItem } from 'types/movie.d'

import styles from './movieItem.module.scss'
import defaultImg from '../../assets/grip.png'
import BookmarkModal from 'components/BookmarkModal'
import { BookmarkIcon } from 'assets/svgs'

interface Props {
  item: ISearchItem
}

const MovieItem = ({ item }: Props) => {
  const [isMarked, setIsMarked] = useState(false)
  const [bookmarkedList] = useRecoilState(bookmarkMovieList)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleClick = () => {
    setIsOpenModal(true)
  }

  useEffect(() => {
    bookmarkedList.map((markedItem) => {
      if (markedItem.imdbID === item.imdbID) setIsMarked(true)
    })
  }, [bookmarkedList, isMarked, item.imdbID])

  return (
    // FIXME: change role='presentation' & onClickEvent name
    <>
      <li onClick={handleClick} className={styles.movieItem} role='presentation'>
        {item.Poster === 'N/A' ? <img src={defaultImg} alt='no poster' /> : <img src={item.Poster} alt='poster' />}
        <div>
          <dt>{item.Title}</dt>
          <dd>
            {item.Type} &#183; {item.Year}
          </dd>
        </div>
        <BookmarkIcon className={cx({ [styles.marked]: isMarked })} />
      </li>
      {isOpenModal && <BookmarkModal setIsOpenModal={setIsOpenModal} item={item} isMarked={isMarked} />}
    </>
  )
}

export default MovieItem
