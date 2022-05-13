import { atom } from 'hooks/state'
import { ISearchItem } from 'types/movie.d'
import store from 'storejs'

export const searchMovieList = atom<ISearchItem[]>({
  key: '#searchMovieList',
  default: [],
})

export const bookmarkMovieList = atom<ISearchItem[]>({
  key: '#bookmarkMovieList',
  default: store.get('bookmarkMovieList') || [],
})
