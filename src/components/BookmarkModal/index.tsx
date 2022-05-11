import styles from './bookmarkModal.module.scss'

interface Props {
  setIsOpenModal: Function
}

const BookmarkModal = ({ setIsOpenModal }: Props) => {
  const handleClickClose = () => {
    setIsOpenModal(false)
  }

  return (
    <div className={styles.modalWrap}>
      즐겨찾기에 추가하시겠습니까
      <button type='button'>즐겨찾기 추가</button>
      <button type='button' onClick={handleClickClose}>
        창닫기
      </button>
    </div>
  )
}

export default BookmarkModal
