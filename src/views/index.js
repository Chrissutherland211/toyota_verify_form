import React from 'react';
import { Router } from "react-router-dom";
import { Container } from './styled/Containers';
import Header from './components/Header';
import Footer from './components/Footer';
import history from "./history";
import Route from "./routes";


function App() {
  localStorage.setItem('step', 0)
  return (
    <Container>
      <Header />
      <Router history={history}>
        <Route />
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
