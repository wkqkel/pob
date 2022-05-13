import { useState, useEffect, ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { useInView } from 'react-intersection-observer'

import { fetchMovieApi } from 'services/movie'
import { searchMovieList } from 'states/atom'

import styles from './search.module.scss'
import MovieItem from 'components/MovieItem'
import { SearchIcon } from 'assets/svgs'
import Loading from 'components/Loading'

const Search = () => {
  const [movieList, setMovieList] = useRecoilState(searchMovieList)
  const [searchValue, setSearchValue] = useState('')
  const [totalNum, setTotalNum] = useState<number>(10)
  const [pageNumber, setPageNumber] = useState<number>(0)
  const [isFetching, setIsFetching] = useState(false)

  const [listEndRef, inView] = useInView()

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setPageNumber(0)
    setSearchValue(event.target.value)
  }

  const loadPageMore = (): void => {
    setPageNumber((prev) => prev + 1)
  }

  const resetData = (): void => {
    setMovieList([])
    setPageNumber(0)
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    resetData()
    loadPageMore()
  }
  const hasNextPage = searchValue && !isFetching && pageNumber > 0 && totalNum > (pageNumber - 1) * 10

  useEffect(() => {
    if (hasNextPage) {
      setIsFetching(true)
      fetchMovieApi({ s: searchValue, page: String(pageNumber) }).then((res) => {
        if (res.data.Response === 'True') {
          setMovieList((prev) => prev.concat(res.data.Search))
          if (pageNumber === 1) setTotalNum(Number(res.data.totalResults))
          setIsFetching(false)
        }
      })
    }
  }, [pageNumber, searchValue, setMovieList])

  useEffect(() => {
    if (inView) {
      loadPageMore()
    }
  }, [inView])

  // /////////////////////////////////////////////////////////////////////////

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <form onSubmit={handleSubmit} className={styles.searchBarWrap}>
          <input className={styles.searchInput} type='text' onChange={handleChangeInput} />
          <button type='submit' className={styles.cancelButton} aria-label='Search button' onSubmit={handleSubmit}>
            검색
          </button>
        </form>
      </header>
      <main className={styles.main}>
        <ul className={styles.movieLists}>
          {movieList.map((item, index) => (
            <MovieItem key={item.imdbID} item={item} index={index} />
          ))}
          {isFetching && <Loading />}
          <div ref={listEndRef} />
        </ul>
        {!movieList.length && (
          <div className={styles.notFound}>
            <SearchIcon />
            <span>검색결과가 없습니다</span>
          </div>
        )}
      </main>
    </div>
  )
}

export default Search
