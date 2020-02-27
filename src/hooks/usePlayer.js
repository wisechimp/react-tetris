import { useState, useCallback } from 'react'

import { TETROMINOS, randomTetromino } from '../gameUtils/tetrominos'
import { STAGE_WIDTH } from '../gameUtils/gameHelpers'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: {
      x: 0,
      y: 0
    },
    tetromino: TETROMINOS[0].shape,
    collided: false
  })

  const updatePLayerPosition = ({ x, y, collided }) => {
    setPlayer(previous => ({
      ...previous,
      position: { 
        x: (previous.position.x += x),
        y: (previous.position.y += y)
      },
      collided
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: {
        x: STAGE_WIDTH / 2 -2,
        y: 0
      },
      tetromino: randomTetromino().shape,
      collided: false
    })
  }, [])

  return [player, updatePLayerPosition, resetPlayer]
}