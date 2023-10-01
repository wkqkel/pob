import { useRecoilState } from 'recoil'

import { bookmarkMovieListState } from 'states/atom'

import styles from './bookmark.module.scss'
import defaultImg from 'assets/cup.png'

const Bookmark = () => {
  const [bookmarkedList] = useRecoilState(bookmarkMovieListState)

  if (bookmarkedList.length !== 0) return null

  return (
    <div className={styles.notFound}>
      <img src={defaultImg} alt='no bookmark' />
      <span>북마크를 담아주세요</span>
    </div>
  )
}
export default Bookmark
