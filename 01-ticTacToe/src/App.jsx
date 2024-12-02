import { useState } from 'react'
import { TURNS, WINNER_COMBOS } from './consts'
import { Square } from './components/Square'
import './App.css'

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = boardToCheck => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }
  const updateBoard = index => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <section style={{ marginBottom: '24px' }}>
        <button onClick={resetBoard}>Reset Game</button>
      </section>
      <section className='board'>
        {Object.values(board).map((value, index) => {
          return (
            <Square
              key={index}
              updateBoard={() => updateBoard(index)}
            >
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section className='board-turns'>
        {<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>}
        {<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>}
      </section>
      {winner ? (
        <section className='board-modal'>
          <button>Play Again</button>
        </section>
      ) : (
        ''
      )}
    </>
  )
}
