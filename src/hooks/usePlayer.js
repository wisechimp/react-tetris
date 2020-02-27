import { useState } from 'react'

import { randomTetromino } from '../gameUtils/tetrominos'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: {
      x: 0,
      y: 0
    },
    tetromino: randomTetromino().shape,
    collided: false
  })
  return [player]
}