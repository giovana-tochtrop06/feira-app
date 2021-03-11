import React from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

import './header.css';

const Header = () => {
  return(
    <Row>
      <Col>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  );  
};

export default Header; 
