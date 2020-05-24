import React from "react";
import PropTypes from "prop-types";

import IPaper from "../../assets/images/icon-paper.svg";
import IRock from "../../assets/images/icon-rock.svg";
import IScissor from "../../assets/images/icon-scissors.svg";
import ISpock from "../../assets/images/icon-spock.svg";
import ILizard from "../../assets/images/icon-lizard.svg";

import {
  OptionEmpty,
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
  spock: {
    icon: ISpock,
    colorShadow: "#2D8DAB",
    colorBackground: "#3FB7CD",
  },
  lizard: {
    icon: ILizard,
    colorShadow: "#5F37A8",
    colorBackground: "#834EE3",
  },
};

export default function OptionComponent({ type, win, selected, onClick }) {
  const { icon, colorShadow, colorBackground } = type ? TYPES[type] : {};
  return type ? (
    <Option win={win} color={colorShadow} selected={selected} onClick={onClick}>
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
  ) : (
    <OptionEmpty />
  );
}

OptionComponent.propTypes = {
  type: PropTypes.oneOf(["", "paper", "scissor", "rock", "lizard", "spock"]),
  selected: PropTypes.bool,
};
