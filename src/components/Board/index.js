import React from "react";
import Option from "../Option";

import ITriangle from "../../assets/images/bg-triangle.svg";

import { Board, OptionsBasic, BackgroundLineBasic } from "./styles";

export default function BoardComponent({ type }) {
  return (
    <Board type={type} background={ITriangle}>
      {type === "basic" && (
        <>
          <BackgroundLineBasic src={ITriangle} alt={`Background ${type}`} />
          <OptionsBasic type={type}>
            <Option type="paper" />
            <Option type="scissor" />
            <Option type="rock" />
          </OptionsBasic>
        </>
      )}
    </Board>
  );
}
