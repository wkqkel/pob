import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { Draggable } from 'react-beautiful-dnd'

import cx from 'classnames'

import { bookmarkMovieList } from 'states/atom'
import { ISearchItem } from 'types/movie.d'

import styles from './movieItem.module.scss'
import defaultImg from 'assets/grip.png'
import BookmarkModal from 'components/BookmarkModal'
import { BookmarkIcon } from 'assets/svgs'
import ModalPortal from 'components/BookmarkModal/modalPortal'

interface Props {
  item: ISearchItem
  index: number
}

const MovieItem = ({ item, index }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [bookmarkedList] = useRecoilState(bookmarkMovieList)
  const isMarked = !!bookmarkedList.find((markedItem) => markedItem.imdbID === item.imdbID)

  const handleClick = () => {
    setIsOpenModal(true)
  }

  return (
    // FIXME: change role='presentation' & onClickEvent name => solution1_ wrap by btn tag
    <>
      <Draggable draggableId={item.imdbID} index={index}>
        {(provided) => (
          <li
            onClick={handleClick}
            className={styles.movieItem}
            role='presentation'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {item.Poster === 'N/A' ? <img src={defaultImg} alt='no poster' /> : <img src={item.Poster} alt='poster' />}
            <div>
              <dt>{item.Title}</dt>
              <dd>
                {item.Type} &#183; {item.Year}
              </dd>
            </div>
            <BookmarkIcon className={cx({ [styles.marked]: isMarked })} />
          </li>
        )}
      </Draggable>
      <ModalPortal>
        {isOpenModal && <BookmarkModal setIsOpenModal={setIsOpenModal} item={item} isMarked={isMarked} />}
      </ModalPortal>
    </>
  )
}

export default MovieItem
