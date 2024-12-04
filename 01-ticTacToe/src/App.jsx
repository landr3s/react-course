import { useState } from 'react'
import { TURNS, WINNER_COMBOS } from './consts'
import { Square } from './components/Square'
import './App.css'
import { WinnerModal } from './components/WinnerModal'
import { resetGameFromStorage, saveGameToStorage } from './logic/storage'

export default function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
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

  const checkEndGame = boarToCheck =>
    boarToCheck.every(square => square !== null)

  const updateBoard = index => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    saveGameToStorage({ board: newBoard, turn: newTurn })
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // draw
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameFromStorage()
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
              {value}
            </Square>
          )
        })}
      </section>
      <section className='board-turns'>
        {<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>}
        {<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>}
      </section>
      <WinnerModal
        resetGame={resetBoard}
        winner={winner}
        turn={turn}
      />
    </>
  )
}
