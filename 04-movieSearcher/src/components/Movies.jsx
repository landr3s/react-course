import { Result } from '../mocks/not-results.json'

function ListOfMovies({ movies }) {
  return movies.map(movie => (
    <li key={movie.id}>
      <p>{movie.title}</p>
      <img
        src={movie.poster}
        alt=''
      />
      <p>{movie.year}</p>
    </li>
  ))
}

function WithoutResults() {
  const { Error } = Result
  return <p>{Error}</p>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? <ListOfMovies movies={movies} /> : <WithoutResults />
}
