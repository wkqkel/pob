import store from 'storejs'
import { useRecoilState } from 'recoil'
import { ISearchItem } from 'types/movie.d'

import { bookmarkMovieListState } from 'states/atom'

const useBookmark = () => {
  const [bookmarkedList, setBookmarkedList] = useRecoilState(bookmarkMovieListState)

  const addBookmark = (item: ISearchItem) => {
    const newList = bookmarkedList.concat(item)
    setBookmarkedList(newList)
    store.set('bookmarkMovieList', newList)
  }

  const deleteBookmark = (item: ISearchItem) => {
    const newList = bookmarkedList.filter((prev) => prev.imdbID !== item.imdbID)
    setBookmarkedList(newList)
    store.set('bookmarkMovieList', newList)
  }

  return {
    addBookmark,
    deleteBookmark,
  }
}

export default useBookmark
