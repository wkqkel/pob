import styles from './bookmarkModal.module.scss'
import { ISearchItem } from 'types/movie.d'
import { useRecoilState } from 'recoil'
import { bookmarkMovieList } from 'states/movie'
import { Dispatch, SetStateAction } from 'react'
import store from 'storejs'

interface Props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  item: ISearchItem
  isMarked: Boolean
}

const BookmarkModal = ({ setIsOpenModal, isMarked, item }: Props) => {
  const [bookmarkedList, setBookmarkedList] = useRecoilState(bookmarkMovieList)

  const handleClickCloseBtn = () => {
    setIsOpenModal(false)
  }

  const handleAddMarkBtn = () => {
    setBookmarkedList(bookmarkedList.concat(item))
    setIsOpenModal(false)
    store.set('bookmarkMovieList', bookmarkedList.concat(item))
  }

  const handleDeleteMarkBtn = () => {
    setBookmarkedList(bookmarkedList.filter((prev) => prev.imdbID !== item.imdbID))
    setIsOpenModal(false)
    store.set(
      'bookmarkMovieList',
      bookmarkedList.filter((prev) => prev.imdbID !== item.imdbID)
    )
  }

  return (
    <div className={styles.modalWrap}>
      {isMarked ? '즐겨찾기에서 삭제하시겠습니까' : '즐겨찾기에 추가하시겠습니까'}

      {isMarked ? (
        <button type='button' onClick={handleDeleteMarkBtn}>
          즐겨찾기 삭제
        </button>
      ) : (
        <button type='button' onClick={handleAddMarkBtn}>
          즐겨찾기 추가
        </button>
      )}
      <button type='button' onClick={handleClickCloseBtn}>
        창닫기
      </button>
    </div>
  )
}

export default BookmarkModal
