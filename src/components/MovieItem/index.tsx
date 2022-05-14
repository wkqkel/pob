import cx from 'classnames'
import { SyntheticEvent, useState } from 'react'
import { useRecoilState } from 'recoil'

import { bookmarkMovieList } from 'states/atom'
import { ISearchItem } from 'types/movie.d'

import styles from './movieItem.module.scss'
import defaultImg from 'assets/grip.png'
import BookmarkModal from 'components/BookmarkModal'
import ModalPortal from 'components/BookmarkModal/modalPortal'
import { BookmarkIcon } from 'assets/svgs'

interface Props {
  item: ISearchItem
}

const MovieItem = ({ item }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [bookmarkedList] = useRecoilState(bookmarkMovieList)
  const isMarked = !!bookmarkedList.find((markedItem) => markedItem.imdbID === item.imdbID)

  const handleClickItem = () => {
    setIsOpenModal(true)
  }

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImg
  }

  return (
    <>
      <li onClick={handleClickItem} className={styles.movieItem} role='presentation'>
        <img src={item.Poster} onError={handleImgError} alt='poster' />
        <div className={styles.infoWrap}>
          <dt>{item.Title}</dt>
          <dd>
            {item.Type} &#183; {item.Year}
          </dd>
        </div>
        <BookmarkIcon className={cx({ [styles.marked]: isMarked })} />
      </li>
      <ModalPortal>
        {isOpenModal && <BookmarkModal setIsOpenModal={setIsOpenModal} item={item} isMarked={isMarked} />}
      </ModalPortal>
    </>
  )
}

export default MovieItem
