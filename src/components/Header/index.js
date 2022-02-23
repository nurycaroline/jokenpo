import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppContext from "../../store/AppContext";

import ILogoBasic from "../../assets/images/logo.svg";
import ILogoAdvanced from "../../assets/images/logo-bonus.svg";

import { Header, Logo, Score } from "./styles";

const LOGO_TYPE = {
  basic: ILogoBasic,
  advanced: ILogoAdvanced,
};

export default function HeaderComponent({ type }) {
  const { score } = useContext(AppContext);

  return (
    <Header>
      <Logo src={LOGO_TYPE[type]} alt={type} />
      <Score>
        <p>SCORE</p>
        <p>{score}</p>
      </Score>
    </Header>
  );
}

HeaderComponent.propTypes = {
  score: PropTypes.number,
};
