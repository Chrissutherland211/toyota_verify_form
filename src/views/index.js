import React from 'react';
import { Router } from "react-router-dom";
import { Container } from './styled/Containers';
import Header from './components/Header';
import history from "./history";
import Route from "./routes";

function App() {
  return (
    <Container>
      <Header />
      <Router history={history}>
        <Route />
      </Router>
    </Container>
  );
}

export default App;
