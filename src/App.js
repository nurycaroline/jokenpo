import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import ModalRule from "./components/ModalRule";

import GlobalStyles from "./layout/globalStyles";
import { Container } from "./layout/styles";

function App() {
  const typeGame = "basic";

  return (
    <Container>
      <GlobalStyles />
      <Header score={12} />
      <Board type={typeGame} />
      <ModalRule type={typeGame} />
    </Container>
  );
}

export default App;
