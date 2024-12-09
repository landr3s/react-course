import './App.css'
import { useCallback, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
<<<<<<< HEAD

function App() {
  const { search, error, updateSearch } = useSearch()
  const { movies, getMovies } = useMovies({ search })
=======
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
>>>>>>> b227818318d567b3700fed9600b8427d819aadec

  const handleSubmit = e => {
    e.preventDefault()
    getMovies(search)
  }
<<<<<<< HEAD
=======

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = e => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedMovies(newSearch)
  }

>>>>>>> b227818318d567b3700fed9600b8427d819aadec
  return (
    <div className='page'>
      <header>
        <label>Search:</label>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='The Avengers, Matrix...'
            value={search}
<<<<<<< HEAD
            onChange={updateSearch}
          />
          <button>Submit</button>
=======
            onChange={handleChange}
          />
          <button>Submit</button>
          <input
            type='checkbox'
            checked={sort}
            onChange={handleSort}
          />
>>>>>>> b227818318d567b3700fed9600b8427d819aadec
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </header>
      <main>
<<<<<<< HEAD
        <Movies movies={movies} />
=======
        <Movies movies={sortedMovies} />
>>>>>>> b227818318d567b3700fed9600b8427d819aadec
      </main>
    </div>
  )
}

export default App
