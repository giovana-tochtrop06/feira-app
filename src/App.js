import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import AboutUs from "./pages/aboutUs/AboutUs";

import './app.css';
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Container>
          <Header />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sobre">
            <AboutUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
