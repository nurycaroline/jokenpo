import React, { useState, useContext } from "react";
import jokenpo from "../../helpers/jokenpo";
import Option from "../Option";
import Result from "../Result";
import AppContext from "../../store/AppContext";

import ITriangle from "../../assets/images/bg-triangle.svg";
import IPentagon from "../../assets/images/bg-pentagon.svg";

import {
  Board,
  OptionsBasic,
  BackgroundLineBasic,
  OptionsAdvanced,
  Choices,
  Choice,
  Label,
} from "./styles";

const VALUES_OPTION = {
  basic: {
    0: "paper",
    1: "scissor",
    2: "rock",
  },
  advanced: {
    0: "paper",
    1: "scissor",
    2: "rock",
    3: "spock",
    4: "lizard",
  },
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

    debugger
    const house =
      VALUES_OPTION[type][
        Math.floor(Math.random() * (Object.keys(VALUES_OPTION[type]).length))
      ];
    setHousePicked(house);
    console.log({ choice, house });

    const play = jokenpo(choice, house);
    setWinner(play.winner);
    if (play.winner === "playOne") {
      addScore();
    }
  }

  return (
    <Board type={type}>
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

      {!youPicked && type === "advanced" && (
        <>
          <BackgroundLineBasic src={IPentagon} alt={`Background ${type}`} />
          <OptionsAdvanced type={type}>
            <Option
              typeGame="advanced"
              type="paper"
              onClick={() => handleYouPicked("paper")}
            />
            <Option
              typeGame="advanced"
              type="scissor"
              onClick={() => handleYouPicked("scissor")}
            />
            <Option
              typeGame="advanced"
              type="rock"
              onClick={() => handleYouPicked("rock")}
            />
            <Option
              typeGame="advanced"
              type="spock"
              onClick={() => handleYouPicked("spock")}
            />
            <Option
              typeGame="advanced"
              type="lizard"
              onClick={() => handleYouPicked("lizard")}
            />
          </OptionsAdvanced>
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
