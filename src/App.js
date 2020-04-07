import React from "react";
import Header from "./components/Header";
import ModalRule from "./components/ModalRule";

import GlobalStyles from "./layout/globalStyles";
import { Container } from "./layout/styles";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header score={12} />
      <ModalRule />
    </Container>
  );
}

export default App;
