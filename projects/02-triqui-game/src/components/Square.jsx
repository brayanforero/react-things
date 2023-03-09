function Square ({ pos, onUpdateBoard, children, isSelected = false }) {
  const className = `square${isSelected ? ' is-selected' : ''}`

  const handleClick = () => {
    onUpdateBoard(pos)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

export default Square
