import { useState, useCallback, useEffect } from 'react'
import { TURNS } from '@/constans/turns'
import { checkWinner } from '@/logic/checkwinner'
import Square from './Square'
import WinnerModal from './WinnerModal'
import { checkEndGame } from '@/logic/checkendgame'
import { saveCurrentMath, resetCurrentMath } from '@/logic/storage'

const initialBoard = Array(9).fill(null)

const Board = () => {
  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(() => {
    const lastTurn = window.localStorage.getItem('turn')
    return lastTurn ?? TURNS.X
  })
  const [board, setBoard] = useState(() => {
    const lastMatch = window.localStorage.getItem('board')

    if (lastMatch) return JSON.parse(lastMatch)
    return initialBoard
  })

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    const newBoard = [...board]
    newBoard[index] = turn

    setTurn(() => newTurn)
    setBoard(() => newBoard)

    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      setWinner(() => newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(() => false)
    }
  }

  const resetGameHandler = useCallback(() => {
    resetCurrentMath()
    setBoard(() => initialBoard)
    setTurn(() => TURNS.X)
    setWinner(() => null)
  }, [setTurn, setBoard, setWinner])

  useEffect(() => {
    saveCurrentMath({ board, turn })
  }, [turn, board])

  return (
    <>
      <section className='board'>
        <h1>Triqui game</h1>
        <button onClick={resetGameHandler} className='button'>
          Reset Game
        </button>
        <div className='game'>
          {board.map((square, index) => (
            <Square key={index} onUpdateBoard={updateBoard} pos={index}>
              {square}
            </Square>
          ))}
        </div>
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} onCloseCallback={resetGameHandler} />
    </>
  )
}

export default Board
