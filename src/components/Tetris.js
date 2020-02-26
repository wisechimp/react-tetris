import React from "react";

import { createStage } from '../gameUtils/gameHelpers'

// Components
import Stage from './Stage'
import Display from './Display'
import StartButt from './StartButton'

export default () => {
  return (
    <div>
      <Stage stage={createStage()}/>
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButt />
      </aside>
    </div>
  );
}
