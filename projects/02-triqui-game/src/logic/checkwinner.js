import { COMBINATIONS } from '@/constans/combos'

export const checkWinner = (boardToCheck) => {
  for (const combination of COMBINATIONS) {
    const [a, b, c] = combination

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
