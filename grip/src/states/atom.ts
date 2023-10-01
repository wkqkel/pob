import store from 'storejs'
import { atom } from 'recoil'
import { ISearchItem } from 'types/movie.d'

export const searchMovieListState = atom<ISearchItem[]>({
  key: '#searchMovieList',
  default: [],
})

export const bookmarkMovieListState = atom<ISearchItem[]>({
  key: '#bookmarkMovieList',
  default: store.get('bookmarkMovieList') || [],
})

export const pageNumberState = atom<number>({
  key: '#pageNumber',
  default: 1,
})
