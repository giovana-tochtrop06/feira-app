import React from 'react';
import { Button, Row, Col, Form, FormControl, Nav } from 'react-bootstrap';

import './header.css';

const Header = () => {
  return(
    <Row className="header">

      <Col sm={4}>
        <h1 className="logo">Feira Virtual</h1>
      </Col>

      <Col sm={8} className="row">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Login</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Col>

    </Row>
  );  
};

export default Header; 
