export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y+= 1) {
    for (let x = 0; x < player.tetromino[0].length; x+=1) {
      // 1) Check that we're in a tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
        // 2) Check movement is within the game area's height (y)
        // Don't go through the bottom of the play area
        !stage[y + player.position.y + moveY] ||
          // 3) Check movement against the width as well
        !stage[y + player.position.y + moveY][x + player.position.x + moveX] ||
        // 4) Check that the cell we're moving to isn't set to clear
        stage[y + player.position.y + moveY][x + player.position.x + moveX][1] !== 'clear'
      ) {
        return true
        }
      }
    }
  }
}