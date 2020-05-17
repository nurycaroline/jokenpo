import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import ModalRule from "./components/ModalRule";
import store from "./store";
import AppContext from "./store/AppContext";

import GlobalStyles from "./layout/globalStyles";
import { Container } from "./layout/styles";

function App() {
  const typeGame = "basic";

  return (
    <AppContext.Provider value={store()}>
      <Container>
        <GlobalStyles />
        <Header />
        <Board type={typeGame} />
        <ModalRule type={typeGame} />
      </Container>
    </AppContext.Provider>
  );
}

export default App;
