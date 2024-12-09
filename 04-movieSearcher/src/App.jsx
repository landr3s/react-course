import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const { search, error, updateSearch } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = e => {
    e.preventDefault()
    getMovies(search)
  }
  return (
    <div className='page'>
      <header>
        <label>Search:</label>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='The Avengers, Matrix...'
            value={search}
            onChange={updateSearch}
          />
          <button>Submit</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
