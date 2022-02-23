import React from "react";
import Button from "../Button";
import { Mode } from "./styles";

function ModeGameComponent({ typeGame, setTypeGame }) {
  return (
    <Mode>
      {typeGame !== "basic" && (
        <Button styled="secondary" onClick={() => setTypeGame("basic")}>
          Basic
        </Button>
      )}
      {typeGame !== "advanced" && (
        <Button styled="secondary" onClick={() => setTypeGame("advanced")}>
          Advanced
        </Button>
      )}
    </Mode>
  );
}

export default ModeGameComponent;
