import React from "react";

import Stage from './Stage'
import Display from './Display'
import StartButt from './StartButton'

export default () => {
  return (
    <div>
      <Stage />
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
