import { ChangeEvent, useState } from 'react'
import { useResetRecoilState } from 'recoil'
import styles from './searchForm.module.scss'
import { useSearchParams } from 'react-router-dom'
import { pageNumberState, searchMovieListState } from 'states/atom'

const SearchHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentSearch = searchParams.get('s')
  const [searchValue, setSearchValue] = useState<string>('')

  const resetMovieList = useResetRecoilState(searchMovieListState)
  const resetPageNumber = useResetRecoilState(pageNumberState)

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (currentSearch === searchValue) return

    setSearchParams({ s: searchValue })
    resetPageNumber()
    resetMovieList()
  }

  return (
    <div className={styles.wrap}>
      <form onSubmit={onSubmit} className={styles.searchBarWrap}>
        <input className={styles.searchInput} type='text' onChange={onChange} />
        <button type='submit' className={styles.searchButton} onSubmit={onSubmit} aria-label='Search button'>
          검색
        </button>
      </form>
    </div>
  )
}

export default SearchHeader
