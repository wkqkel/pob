import { useRecoilState } from 'recoil'

import { bookmarkMovieListState } from 'states/atom'

import styles from './bookmark.module.scss'
import MovieItem from 'components/MovieItem'
import NoBookmark from './NoBookmark'

const Bookmark = () => {
  const [bookmarkedList] = useRecoilState(bookmarkMovieListState)

  return (
    <div className={styles.wrap}>
      <main className={styles.main}>
        <ul className={styles.movieLists}>
          {bookmarkedList.map((item) => (
            <MovieItem key={item.imdbID} item={item} />
          ))}
        </ul>
        <NoBookmark />
      </main>
    </div>
  )
}
export default Bookmark
