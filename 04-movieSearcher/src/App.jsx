import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies: mappedMovies } = useMovies()
  return (
    <div className='page'>
      <header>
        <label>Search:</label>
        <form>
          <input placeholder='The Avengers, Matrix...' />
          <button>Submit</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
