import { Square } from '.'

function WinnerModal ({ winner, onCloseCallback }) {
  if (winner === null) return null

  const displayText = winner !== false ? 'Ganó' : 'Empate'

  const closeHandler = () => {
    onCloseCallback()
  }

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{displayText}</h2>
        <header className='win'>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={closeHandler}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
