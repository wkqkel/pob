import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useInView } from 'react-intersection-observer'

import { pageNumberState, searchMovieListState } from 'states/atom'

import styles from './search.module.scss'
import MovieItem from 'components/MovieItem'
import NotFound from './NotFound'
import { useSearchParams } from 'react-router-dom'
import { getMovieListApi } from 'services/movie'
import Loading from 'components/Spinner'

const NO_RESULT = '검색 결과가 없습니다.'
const TOO_MANY_RESULT = '검색 결과가 너무 많습니다.'
const NET_ERROR = '현재 검색이 불가능합니다.'

const Search = () => {
  const [movieList, setMovieList] = useRecoilState(searchMovieListState)
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>(NO_RESULT)

  const [searchParams] = useSearchParams()
  const [listEndRef, inView] = useInView()

  const currentSearch = searchParams.get('s')

  const getMovieList = useCallback(async () => {
    if (!currentSearch) return

    setIsLoading(true)

    await getMovieListApi({ s: currentSearch, page: String(pageNumber) })
      .then((res) => res.data)
      .then((data) => {
        if (data.Response === 'False') {
          if (data.Error === 'Too many results.') {
            setErrorMessage(TOO_MANY_RESULT)
          }
          listEndRef(null) // 페이지 초과시 불러옴 방지
          return
        }
        setMovieList((prev) => prev.concat(data.Search))
      })
      .catch(() => {
        setErrorMessage(NET_ERROR)
      })

    setIsLoading(false)
  }, [currentSearch, listEndRef, pageNumber, setMovieList])

  useEffect(() => {
    if (inView) {
      setPageNumber((prev) => prev + 1)
    }
  }, [inView, setPageNumber])

  useEffect(() => {
    getMovieList()
  }, [getMovieList])

  return (
    <div className={styles.wrap}>
      <ul className={styles.movieLists}>
        {movieList.map((item, idx) => {
          const key = `${item}-${idx}`
          return <MovieItem key={key} item={item} />
        })}
      </ul>
      {movieList.length > 0 && <div ref={listEndRef} />}
      <Loading isLoading={isLoading} />
      <NotFound isNotFound={!isLoading && !movieList.length} errorMessage={errorMessage} />
    </div>
  )
}

export default Search
