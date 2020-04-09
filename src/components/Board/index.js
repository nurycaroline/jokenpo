import React, { useState } from "react";
import Option from "../Option";

import ITriangle from "../../assets/images/bg-triangle.svg";

import {
  Board,
  OptionsBasic,
  BackgroundLineBasic,
  Choices,
  Choice,
  Label,
} from "./styles";

export default function BoardComponent({ type }) {
  const [option, setOption] = useState("paper");
  const [optionHose, setOptionHouse] = useState("rock");

  return (
    <Board type={type} background={ITriangle}>
      {!option && type === "basic" && (
        <>
          <BackgroundLineBasic src={ITriangle} alt={`Background ${type}`} />
          <OptionsBasic type={type}>
            <Option type="paper" />
            <Option type="scissor" />
            <Option type="rock" />
          </OptionsBasic>
        </>
      )}

      {option && (
        <Choices>
          <Choice>
            <Option type={option} selected />
            <Label>YOU PICKED</Label>
          </Choice>
          <Choice>
            <Option type={optionHose} selected />
            <Label>THE HOUSE PICKED</Label>
          </Choice>
        </Choices>
      )}
    </Board>
  );
}
