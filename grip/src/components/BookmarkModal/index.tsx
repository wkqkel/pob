import useBookmark from 'hooks/useBookmark'

import styles from './bookmarkModal.module.scss'
import { ISearchItem } from 'types/movie.d'
import { useGA } from 'hooks'

interface Props {
  setIsOpenModal: Function
  item: ISearchItem
  isMarked: Boolean
}

const BookmarkModal = ({ setIsOpenModal, isMarked, item }: Props) => {
  const { addBookmark, deleteBookmark } = useBookmark()
  const { gaEvent } = useGA()

  const handleClickBookmarkBtn = () => {
    gaEvent({ action: 'bookmark', data: { bookmark: isMarked ? 'cancel' : 'bookmark' } })
    isMarked ? deleteBookmark(item) : addBookmark(item)
    handleCloseModal()
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div className={styles.background}>
      <button type='button' className={styles.outerBtn} onClick={handleCloseModal} aria-label='Outer button' />
      <div className={styles.modalWrap}>
        <span className={styles.title}>북마크에 {isMarked ? '삭제' : '추가'}하시겠습니까</span>
        <div className={styles.buttonsWrap}>
          <button type='button' onClick={handleClickBookmarkBtn} aria-label='Bookmark button'>
            {isMarked ? '삭제' : '추가'}
          </button>
          <button type='button' onClick={handleCloseModal} aria-label='Close button'>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookmarkModal
