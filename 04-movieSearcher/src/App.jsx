import './App.css'
import { useCallback, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies: sortedMovies, getMovies } = useMovies({ search, sort })
  console.log('render')

  const debouncedMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  const handleSubmit = e => {
    e.preventDefault()
    getMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = e => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <label>Search:</label>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='The Avengers, Matrix...'
            value={search}
            onChange={handleChange}
          />
          <button>Submit</button>
          <input
            type='checkbox'
            checked={sort}
            onChange={handleSort}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </header>
      <main>
        <Movies movies={sortedMovies} />
      </main>
    </div>
  )
}

export default App
