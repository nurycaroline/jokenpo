import React, { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import ModalRule from "./components/ModalRule";
import ModeGame from "./components/ModeGame";
import store from "./store";
import AppContext from "./store/AppContext";

import GlobalStyles from "./layout/globalStyles";
import { Container } from "./layout/styles";

function App() {
  const [typeGame, setTypeGame] = useState("basic");

  return (
    <AppContext.Provider value={store()}>
      <Container>
        <GlobalStyles />
        <Header type={typeGame} />
        <Board type={typeGame} />
        <ModalRule type={typeGame} />
        <ModeGame typeGame={typeGame} setTypeGame={setTypeGame} />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
