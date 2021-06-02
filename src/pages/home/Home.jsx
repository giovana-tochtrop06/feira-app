import React from 'react';
import GiButton from '../../components/gibutton/GiButton';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import './home.css';

const Home = () => {
  return (
    <Row className="center">
      <Col md={{span: 6, offset: 3}}>
        <Link to="/especiarias">
            <GiButton>
              Especiarias
            </GiButton>
          </Link>
          <Link to="/frutas">
            <GiButton>
              Frutas
            </GiButton>
          </Link>
          <Link to="/legumes">
            <GiButton>
              Legumes
            </GiButton>
        </Link>
      </Col>
    </Row>
  );
};

export default Home;
