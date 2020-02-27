import React, { useState } from "react";

import { createStage } from '../gameUtils/gameHelpers'

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

// Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'
import Stage from './Stage'
import Display from './Display'
import StartButt from './StartButton'

export default () => {
  const [dropTime, setDropTime] = useState()
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPosition, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer)

  console.log('Re-render')

  const movePlayer = direction => {
    updatePlayerPosition({ x: direction, y: 0 })
  }

  const startGame = () => {
    //Reset everything
    setStage(createStage())
    resetPlayer()
  }

  const drop = () => {
    updatePlayerPosition({ x: 0, y: 1, collided: false })
  }

  const dropPlayer = () => {
    drop()
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      switch (keyCode) {
        case 37:
          movePlayer(-1)
          break
        case 39:
          movePlayer(1)
          break
        case 40:
          dropPlayer()
          break
        default:
          break
      }
    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          )}
          <StartButt callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
