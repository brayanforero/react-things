export const saveCurrentMath = ({ board, turn }) => {
  window.localStorage.setItem('turn', turn)
  window.localStorage.setItem('board', JSON.stringify(board))
}

export const resetCurrentMath = () => {
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('board')
}
