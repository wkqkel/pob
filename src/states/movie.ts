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

// export const bookmarkMovieList = atom<ISearchItem[]>({
//   key: '#bookmarkMovieList',
//   default: [
//     {
//       Poster:
//         'https://m.media-amazon.com/images/M/MV5BODc3YTIwY2ItMDU3MS00ZTFlLWJjOTAtNmE4M2M0NWI4MWE1XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg',
//       Title: 'The Incredible Hulk',
//       Type: 'series',
//       Year: '1977–1982',
//       imdbID: 'tt0077031',
//     },
//     {
//       Poster:
//         'https://m.media-amazon.com/images/M/MV5BYmVjYzA3MmYtZjBhOS00OGI5LWIzZTEtOTRkZGY2ZWQ5NjkzXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg',
//       Title: 'The Incredible Hulk',
//       Type: 'series',
//       Year: '1996–1998',
//       imdbID: 'tt0115215',
//     },
//     {
//       Poster:
//         'https://m.media-amazon.com/images/M/MV5BYTVlNjcwMjUtMmNjZS00MzZhLTkwZjUtNzFmMzNlNmEzYzQ0XkEyXkFqcGdeQXVyODM0NzI5MDM@._V1_SX300.jpg',
//       Title: 'The Death of the Incredible Hulk',
//       Type: 'movie',
//       Year: '1990',
//       imdbID: 'tt0099387',
//     },
//     {
//       Poster: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg',
//       Title: 'The Incredible Hulk',
//       Type: 'movie',
//       Year: '2008',
//       imdbID: 'tt0800080',
//     },
//   ],
// })
