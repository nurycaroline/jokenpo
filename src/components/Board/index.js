import React, { useState, useEffect } from "react";
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
  1: "paper",
  2: "scissor",
  3: "rock",
};

export default function BoardComponent({ type }) {
  const [youPicked, setYouPicked] = useState("");
  const [housePicked, sethousePicked] = useState("");

  useEffect(() => {
    sethousePicked(VALUES_OPTION[Math.floor(Math.random() * 3) + 1]);
  }, [youPicked]);

  function handleNewGame() {
    setYouPicked("");
    sethousePicked("");
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
            <Option type={youPicked} selected />
            <Label>YOU PICKED</Label>
          </Choice>
          <Choice>
            <Option type={housePicked} selected />
            <Label>THE HOUSE PICKED</Label>
          </Choice>
        </Choices>
      )}

      {youPicked && housePicked && (
        <Result
          youPicked={youPicked}
          housePicked={housePicked}
          handleNewGame={handleNewGame}
        />
      )}
    </Board>
  );
}
