import React from "react";
import PropTypes from "prop-types";

import IPaper from "../../assets/images/icon-paper.svg";
import IRock from "../../assets/images/icon-rock.svg";
import IScissor from "../../assets/images/icon-scissors.svg";

import {
  Option,
  OvalGradient,
  OvalBackground,
  OvalInsideBackground,
  OvalInsideGradient,
  Image,
} from "./styles";

const TYPES = {
  paper: {
    icon: IPaper,
    colorShadow: "#2a45c2",
    colorBackground: "#4664F4",
  },
  scissor: {
    icon: IScissor,
    colorShadow: "#C76C1B",
    colorBackground: "#EB9F0E",
  },
  rock: {
    icon: IRock,
    colorShadow: "#9D1634",
    colorBackground: "#DB2E4D",
  },
};

export default function OptionComponent({ type }) {
  const { icon, colorShadow, colorBackground } = TYPES[type];
  return (
    <Option color={colorShadow}>
      <OvalBackground color={colorBackground}>
        <OvalGradient>
          <OvalInsideBackground>
            <OvalInsideGradient>
              <Image src={icon} alt={type} />
            </OvalInsideGradient>
          </OvalInsideBackground>
        </OvalGradient>
      </OvalBackground>
    </Option>
  );
}

OptionComponent.propTypes = {
  type: PropTypes.oneOf(["paper", "scissor", "rock"]),
};
