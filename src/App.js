import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import AboutUs from "./pages/aboutUs/AboutUs";
import SignUp from "./pages/signUp/SignUp"

import './app.css';
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Especiarias from './pages/especiarias/Especiarias';
import Legumes from './pages/legumes/Legumes';
import Frutas from './pages/frutas/Frutas';
import Car from './pages/car/Car';

const App = () => {
  return (
    <Router>
      <Switch>
        <Container>
          <Header />
          <Route path="/sobre">
            <AboutUs />
          </Route>
          <Route path="/entrar">
            <Login />
          </Route>
          <Route path="/cadastrar">
            <SignUp />
          </Route>
          <Route path="/frutas">
            <Frutas />
          </Route>
          <Route path="/legumes">
            <Legumes />
          </Route>
          <Route path="/especiarias">
            <Especiarias />
          </Route>
          <Route path="/carrinho">
            <Car />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Footer />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
