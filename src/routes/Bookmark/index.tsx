import { useRecoilState } from 'recoil'

import { bookmarkMovieList } from 'states/movie'

import styles from './bookmark.module.scss'
import MovieItem from '../../components/MovieItem'
import defaultImg from '../../assets/cup.png'

const Bookmark = () => {
  const [bookmarkedList, setBookmarkedList] = useRecoilState(bookmarkMovieList)

  return (
    <div className={styles.wrap}>
      <h1>내 즐겨찾기</h1>
      {bookmarkedList.length ? (
        <ul className={styles.movieLists}>
          {bookmarkedList.map((item) => (
            <MovieItem key={item.imdbID} item={item} />
          ))}
        </ul>
      ) : (
        <div className={styles.notFound}>
          <img src={defaultImg} alt='no bookmark' />
          <span>북마크를 담아주세요</span>
        </div>
      )}
    </div>
  )
}
export default Bookmark
