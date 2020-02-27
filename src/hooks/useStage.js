import { useState } from 'react'

import { createStage } from '../gameUtils/gameHelpers'

export const useStage = () => {
  const [stage, setStage] = useState(createStage())

  return [stage, setStage]
}