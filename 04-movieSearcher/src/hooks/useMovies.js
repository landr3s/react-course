import { Search } from '../mocks/with-results.json'

export const useMovies = () => {
  const movies = Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year
  }))
  return { movies: mappedMovies }
}
