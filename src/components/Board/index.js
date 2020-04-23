import React, { useState, useEffect } from "react";
import useJokenpo from "../../hooks/useJokenpo";
import Option from "../Option";
import Result from "../Result";

import ITriangle from "../../assets/images/bg-triangle.svg";

import {
  Board,
  OptionsBasic,
  BackgroundLineBasic,
  Choices,
  Choice,
  Label,
} from "./styles";

const VALUES_OPTION = {
  0: "paper",
  1: "scissor",
  2: "rock",
};

export default function BoardComponent({ type }) {
  const [youPicked, setYouPicked] = useState("");
  const [housePicked, setHousePicked] = useState("");
  const { winner } = useJokenpo(youPicked, housePicked);

  useEffect(() => {
    if (youPicked) {
      setHousePicked(VALUES_OPTION[Math.floor(Math.random() * 3)]);
    }
  }, [youPicked]);

  function handleNewGame() {
    setYouPicked("");
    setHousePicked("");
  }

  return (
    <Board type={type} background={ITriangle}>
      {!youPicked && type === "basic" && (
        <>
          <BackgroundLineBasic src={ITriangle} alt={`Background ${type}`} />
          <OptionsBasic type={type}>
            <Option type="paper" onClick={() => setYouPicked("paper")} />
            <Option type="scissor" onClick={() => setYouPicked("scissor")} />
            <Option type="rock" onClick={() => setYouPicked("rock")} />
          </OptionsBasic>
        </>
      )}

      {youPicked && (
        <Choices>
          <Choice>
            <Option type={youPicked} win={winner === "playOne"} selected />
            <Label>YOU PICKED</Label>
          </Choice>
          <Choice>
            <Option type={housePicked} win={winner === "playTwo"} selected />
            <Label>THE HOUSE PICKED</Label>
          </Choice>
        </Choices>
      )}

      {youPicked && housePicked && (
        <Result winner={winner} handleNewGame={handleNewGame} />
      )}
    </Board>
  );
}
