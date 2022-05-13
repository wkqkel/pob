import { useRecoilState } from 'recoil'
import { Droppable } from 'react-beautiful-dnd'
import { bookmarkMovieList } from 'states/atom'

import styles from './bookmark.module.scss'
import MovieItem from 'components/MovieItem'
import defaultImg from 'assets/cup.png'

const Bookmark = () => {
  const [bookmarkedList] = useRecoilState(bookmarkMovieList)

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <h1>내 즐겨찾기</h1>
      </header>
      <main className={styles.main}>
        <Droppable droppableId='fields'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ul className={styles.movieLists}>
                {bookmarkedList.map((item, index) => (
                  <MovieItem key={item.imdbID} item={item} index={index} />
                ))}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
        {!bookmarkedList.length && (
          <div className={styles.notFound}>
            <img src={defaultImg} alt='no bookmark' />
            <span>북마크를 담아주세요</span>
          </div>
        )}
      </main>
    </div>
  )
}
export default Bookmark
