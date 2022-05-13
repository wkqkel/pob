import store from 'storejs'
import { atom, selector } from 'hooks/state'
import { ISearchItem } from 'types/movie.d'
import { fetchMovieApi } from 'services/movie'

export const searchedValue = atom<string>({
  key: '#searchedValue',
  default: '',
})

export const curSearchValue = atom<string>({
  key: '#curSearchValue',
  default: '',
})

export const curMoviePage = atom<string>({
  key: '#curMoviePage',
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
