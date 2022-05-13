import { atom } from 'hooks/state'
import { ISearchItem } from 'types/movie.d'
import store from 'storejs'

export const searchedValue = atom<string>({
  key: '#curSearchValue',
  default: '',
})

export const isLoading = atom<boolean>({
  key: 'isLoading',
  default: false,
})

export const searchMovieList = atom<ISearchItem[]>({
  key: '#searchMovieList',
  default: [],
})

export const bookmarkMovieList = atom<ISearchItem[]>({
  key: '#bookmarkMovieList',
  default: store.get('bookmarkMovieList') || [],
})

// export const fetchMovieList = selector({
//   key: '#fetchMovieList',
//   get: async ({ get }) => {
//     const search = get(curSearchValue)
//     const currentPage = get(curMoviePage)
//     const res = await fetchMovieApi({ s: search, page: String(currentPage) })
//     if (res.data.Response === 'True') return res.data.Search
//   },
// })
