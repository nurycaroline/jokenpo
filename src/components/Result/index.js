import React from "react";

import { Result, ButtonPlay } from "./styles";

export default function ResultComponent({
  youPicked,
  housePicked,
  handleNewGame,
}) {
  return (
    <Result>
      <h2>YOU WIN</h2>
      <ButtonPlay styled="secondary" onClick={handleNewGame}>
        PLAY AGAIN
      </ButtonPlay>
    </Result>
  );
}
