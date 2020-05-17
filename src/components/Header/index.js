import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppContext from "../../store/AppContext";

import ILogo from "../../assets/images/logo.svg";

import { Header, Logo, Score } from "./styles";

export default function HeaderComponent() {
  const { score } = useContext(AppContext);

  return (
    <Header>
      <Logo src={ILogo} alt="Logo Basic" />
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
