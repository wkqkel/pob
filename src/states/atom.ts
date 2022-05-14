import store from 'storejs'
import { atom } from 'recoil'
import { ISearchItem } from 'types/movie.d'

export const searchMovieList = atom<ISearchItem[]>({
  key: '#searchMovieList',
  default: [],
})

export const bookmarkMovieList = atom<ISearchItem[]>({
  key: '#bookmarkMovieList',
  default: store.get('bookmarkMovieList') || [],
})
