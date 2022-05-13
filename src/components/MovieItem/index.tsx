import { useState } from 'react'
import { useRecoilState } from 'recoil'
import cx from 'classnames'

import { bookmarkMovieList } from 'states/movie'
import { ISearchItem } from 'types/movie.d'

import styles from './movieItem.module.scss'
import defaultImg from '../../assets/grip.png'
import BookmarkModal from 'components/BookmarkModal'
import { BookmarkIcon } from 'assets/svgs'
import ModalPortal from 'components/BookmarkModal/modalPortal'

interface Props {
  item: ISearchItem
}

const MovieItem = ({ item }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [bookmarkedList] = useRecoilState(bookmarkMovieList)
  const isMarked = !!bookmarkedList.filter((markedItem) => markedItem.imdbID === item.imdbID).length

  const handleClick = () => {
    setIsOpenModal(true)
  }

  return (
    // FIXME: change role='presentation' & onClickEvent name => solution1_ wrap by btn tag
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

      <ModalPortal>
        {isOpenModal && <BookmarkModal setIsOpenModal={setIsOpenModal} item={item} isMarked={isMarked} />}
      </ModalPortal>
    </>
  )
}

export default MovieItem
