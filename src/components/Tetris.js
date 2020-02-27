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

  const [player] = usePlayer()
  const [stage, setStage] = useStage(player)

  console.log('Re-render')

  return (
    <StyledTetrisWrapper>
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
          <StartButt />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
