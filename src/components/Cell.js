import React from 'react'

import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../gameUtils/tetrominos'

export default ({ type }) => (
  <StyledCell type={'L'} color={TETROMINOS['L'].color} >
    Cell
  </StyledCell>
)