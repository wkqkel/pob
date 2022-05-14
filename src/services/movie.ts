import axios from 'axios'
import { IMovieAPIRes } from 'types/movie.d'

const MOVIE_BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

export interface IParams {
  s: string
  page: string
}

export const fetchMovieApi = (params: IParams) =>
  axios.get<IMovieAPIRes>(`${MOVIE_BASE_URL}`, {
    params,
  })
