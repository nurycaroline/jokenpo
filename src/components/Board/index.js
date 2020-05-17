import React, { useState, useContext } from "react";
import jokenpo from "../../helpers/jokenpo";
import Option from "../Option";
import Result from "../Result";
import AppContext from "../../store/AppContext";

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
  const [winner, setWinner] = useState("");
  const { addScore } = useContext(AppContext);

  function handleNewGame() {
    setYouPicked("");
    setHousePicked("");
  }

  function handleYouPicked(choice) {
    setYouPicked(choice);
    const house = VALUES_OPTION[Math.floor(Math.random() * 3)];
    setHousePicked(house);

    const play = jokenpo(choice, house);
    setWinner(play.winner);
    if (play.winner === "playOne") {
      addScore();
    }
  }

  return (
    <Board type={type} background={ITriangle}>
      {!youPicked && type === "basic" && (
        <>
          <BackgroundLineBasic src={ITriangle} alt={`Background ${type}`} />
          <OptionsBasic type={type}>
            <Option type="paper" onClick={() => handleYouPicked("paper")} />
            <Option type="scissor" onClick={() => handleYouPicked("scissor")} />
            <Option type="rock" onClick={() => handleYouPicked("rock")} />
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
