import React from 'react';
import Button from '../../components/gibutton/Button';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import './home.css';

const Home = () => {
  return (
    <Row className="center">
      <Col md={{span: 6, offset: 3}}>
        <Link to="/especiarias">
            <Button>
              Especiarias
            </Button>
          </Link>
          <Link to="/frutas">
            <Button>
              Frutas
            </Button>
          </Link>
          <Link to="/legumes">
            <Button>
              Legumes
            </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default Home;
