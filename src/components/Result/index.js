import React from "react";

import { Result, ButtonPlay } from "./styles";

export default function ResultComponent({ winner, handleNewGame }) {
  return (
    <Result>
      <h2>
        {winner === "playOne"
          ? "YOU WIN"
          : winner === "tied"
          ? "TIED"
          : "YOU LOSE"}
      </h2>
      <ButtonPlay styled="secondary" onClick={handleNewGame}>
        PLAY AGAIN
      </ButtonPlay>
    </Result>
  );
}
