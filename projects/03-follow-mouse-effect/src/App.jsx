
import { useCallback, useEffect, useState } from 'react'
import './App.css'

const initialPosition = {
  x: 0,
  y: 0
}
function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState(initialPosition)
  const enabledToggleHandler = useCallback(() => {
    setEnabled(prev => !prev)
  }, [setEnabled])

  useEffect(() => {
    const setPositionMouse = (e) => {
      const { clientX, clientY } = e

      setPosition({
        x: clientX,
        y: clientY
      })
    }

    if (enabled) window.addEventListener('mousemove', setPositionMouse)

    return () => {
      window.removeEventListener('mousemove', setPositionMouse)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('hide-cursor', enabled)
    setPosition(initialPosition)
  }, [enabled, setPosition])

  return (
    <div className='App'>
      <h2>Follow move: {JSON.stringify(position)}</h2>
      <hr />
      <button onClick={enabledToggleHandler}>
        {
          enabled ? 'Disabled' : 'Enabled'
        }
      </button>

      <span
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        className='pointer-mask'
      />
    </div>
  )
}

export default App
