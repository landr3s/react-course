import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main>
      <h1>React Tecnic Test</h1>
      <button onClick={handleClick}>Get a new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extracted from cat fact: ${fact}`}
          />
        )}
      </section>
    </main>
  )
}
