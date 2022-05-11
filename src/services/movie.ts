import { axios } from 'hooks/worker'
import { IMovieAPIRes } from 'types/movie.d'

const MOVIE_BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

interface Params {
  s: string
  page: string
}

export const fetchMovieApi = (params: Params) =>
  axios.get<IMovieAPIRes>(`${MOVIE_BASE_URL}`, {
    params,
  })
