import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return(
    <Row className="header">
      <Col sm={4}>
        <Link to="/" className="logo">
          <h1>Feira Virtual</h1>
        </Link>
      </Col>

      <Col sm={8}>
        <Nav className="mr-auto justify-content-end">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to="/carrinho">
            <Nav.Link href="#carrinho">Carrinho</Nav.Link>
          </Link>
          <Link to="/cadastrar">
            <Nav.Link href="#cadastrar">Cadastrar</Nav.Link>
          </Link>
          <Link to="/entrar">
            <Nav.Link href="#login">Login</Nav.Link>
          </Link>
        </Nav>
      </Col>

    </Row>
  );  
};

export default Header; 
