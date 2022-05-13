import store from 'storejs'
import { useRecoilState } from 'recoil'
import { Dispatch, SetStateAction, useRef, useEffect } from 'react'

import { bookmarkMovieList } from 'states/movie'

import styles from './bookmarkModal.module.scss'
import { ISearchItem } from 'types/movie.d'

interface Props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  item: ISearchItem
  isMarked: Boolean
}

const BookmarkModal = ({ setIsOpenModal, isMarked, item }: Props) => {
  const [bookmarkedList, setBookmarkedList] = useRecoilState(bookmarkMovieList)
  const modalRef = useRef<HTMLDivElement>(null)

  const addBookmark = () => {
    const newList = bookmarkedList.concat(item)
    setBookmarkedList(newList)
    store.set('bookmarkMovieList', newList)
  }

  const deleteBookmark = () => {
    const newList = bookmarkedList.filter((prev) => prev.imdbID !== item.imdbID)
    setBookmarkedList(newList)
    store.set('bookmarkMovieList', newList)
  }

  const handleClickBookmarkBtn = () => {
    isMarked ? deleteBookmark() : addBookmark()
    handleCloseModal()
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  // useEffect(() => {
  //   window.addEventListener('click', handleCloseModal)
  //   return () => window.removeEventListener('click', handleCloseModal)
  // }, [])

  return (
    <div className={styles.background}>
      <div className={styles.modalWrap} ref={modalRef}>
        <button type='button' onClick={handleClickBookmarkBtn}>
          {isMarked ? '삭제' : '추가'}
        </button>
        <button type='button' onClick={handleCloseModal}>
          창닫기
        </button>
      </div>
    </div>
  )
}

export default BookmarkModal
