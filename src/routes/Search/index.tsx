import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useInView } from 'react-intersection-observer'
import { useMount } from 'react-use'

import { fetchMovieApi } from 'services/movie'
import { searchMovieList } from '../../states/movie'

import styles from './search.module.scss'
import MovieItem from '../../components/MovieItem'
import BookmarkModal from 'components/BookmarkModal'
import { SearchIcon } from 'assets/svgs'

const Search = () => {
  const [movieList, setMovieList] = useRecoilState(searchMovieList)
  const [searchValue, setSearchValue] = useState('')
  const [pageNumber, setPageNumber] = useState<number>(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [listEndRef, inView] = useInView()

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPageNumber(0)
    setSearchValue(event.target.value)
  }

  const loadPageMore = (): void => {
    setPageNumber((prev) => prev + 1)
  }

  const resetData = (): void => {
    setMovieList([])
    setPageNumber(0)
    setSearchValue(searchValue)
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    resetData()
    loadPageMore()
  }

  useEffect(() => {
    if (pageNumber > 0) {
      fetchMovieApi({ s: searchValue, page: String(pageNumber) }).then((res) => {
        // console.log(res.data.Search)
        if (res.data.Response === 'True') setMovieList((prev) => prev.concat(res.data.Search))
      })
    }
  }, [pageNumber, searchValue, setMovieList])

  useEffect(() => {
    if (inView) {
      loadPageMore()
    }
  }, [inView])

  useMount(() => {
    resetData()
  })

  return (
    <div className={styles.wrap}>
      {isOpenModal && <BookmarkModal setIsOpenModal={setIsOpenModal} />}
      <form onSubmit={handleSubmit} className={styles.searchBarWrap}>
        <input className={styles.searchInput} type='text' onChange={handleChangeInput} />
        <button type='submit' className={styles.cancelButton} aria-label='Search button' onSubmit={handleSubmit}>
          검색
        </button>
      </form>
      {movieList.length ? (
        <ul className={styles.movieLists}>
          {movieList.map((item) => (
            <MovieItem key={item.imdbID} item={item} />
          ))}
          <div ref={listEndRef} />
        </ul>
      ) : (
        <div className={styles.notFound}>
          <SearchIcon />
          <span>검색결과가 없습니다</span>
        </div>
      )}
    </div>
  )
}

export default Search

// Response: "True"
// Search: Array(10)
// 0: {Title: 'Iron Man', Year: '2008', imdbID: 'tt0371746', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'}
// 1: {Title: 'Iron Man 3', Year: '2013', imdbID: 'tt1300854', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg'}
// 2: {Title: 'Iron Man 2', Year: '2010', imdbID: 'tt1228705', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg'}
// 3: {Title: 'The Iron Giant', Year: '1999', imdbID: 'tt0129167', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjIxNDU2Njk0OV5BMl5BanBnXkFtZTgwODc3Njc3NjE@._V1_SX300.jpg'}
// 4: {Title: 'The Man in the Iron Mask', Year: '1998', imdbID: 'tt0120744', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BZjM2YzcxMm…2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'}
// 5: {Title: 'Iron Fist', Year: '2017–2018', imdbID: 'tt3322310', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg'}
// 6: {Title: 'The Iron Lady', Year: '2011', imdbID: 'tt1007029', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg'}
// 7: {Title: 'Iron Sky', Year: '2012', imdbID: 'tt1034314', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg'}
// 8: {Title: 'The Man with the Iron Fists', Year: '2012', imdbID: 'tt1258972', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg'}
// 9: {Title: '3-Iron', Year: '2004', imdbID: 'tt0423866', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYzBmODdkMz…zFlMmQ3XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg'}
// length: 10
// totalResults: "752"
