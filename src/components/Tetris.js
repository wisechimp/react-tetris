import React, { useState } from "react";

import { createStage, checkCollision } from '../gameUtils/gameHelpers'

// Custom Hooks
import { useInterval } from '../hooks/useInterval' // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

// Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'
import Stage from './Stage'
import Display from './Display'
import StartButt from './StartButton'

export default () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPosition, resetPlayer, rotatePlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer)

  console.log('Re-render')

  const movePlayerHorizontally = direction => {
    if (!checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 })
    }
  }

  const startGame = () => {
    //Reset everything
    setStage(createStage())
    setDropTime(1000)
    resetPlayer()
    setGameOver(false)
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })){
      updatePlayerPosition({ x: 0, y: 1, collided: false })
    } else {
      if (player.position.y < 1) {
        console.log('Game Over !!!')
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true })
    }
  }

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log('Interval on')
        setDropTime(1000)
      }
    }
  }
  const dropPlayer = () => {
    console.log('Interval off')
    setDropTime(null)
    drop()
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      switch (keyCode) {
        case 37:
          movePlayerHorizontally(-1)
          break
        case 38:
          rotatePlayer(stage, 1)
          break
        case 39:
          movePlayerHorizontally(1)
          break
        case 40:
          dropPlayer()
          break
        default:
          break
      }
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
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
