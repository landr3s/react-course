import { Square } from './Square'

export function WinnerModal({ resetGame, winner }) {
  if (winner === null) return null
  const text = winner ? 'Gano:' : 'Empate'
  return (
    <section className='board-modal'>
      <div className='board-modal-box'>
        <div className=''>
          <p>{text}</p>
          {winner && <Square>{winner}</Square>}
        </div>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
