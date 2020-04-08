import React from "react";
import Option from "../Option";

import ITriangle from "../../assets/images/bg-triangle.svg";

import { Board, Options, BackgroundLine } from "./styles";

export default function BoardComponent({ type }) {
  return (
    <Board type={type} background={ITriangle}>
      <BackgroundLine src={ITriangle} alt={`Background ${type}`} />
      <Options type={type}>
        <Option type="paper" />
        <Option type="scissor" />
        <Option type="rock" />
      </Options>
    </Board>
  );
}
