import { useState, useEffect } from 'react'

import { createStage } from '../gameUtils/gameHelpers'

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage())

  useEffect(() => {
    const updateStage = previousStage => {
      // Clear the stage from the previous render
      const newStage = previousStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      )

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if ( value !== 0) {
            newStage[y + player.position.y][x + player.position.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ]
          }
        })
      })

      return newStage
    }

    setStage(previous => updateStage(previous))

  }, [player])

  return [stage, setStage]
}