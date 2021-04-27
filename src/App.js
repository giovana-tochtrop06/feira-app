//LIB EXTERNA 
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//IMPORTS INTERNOS 
import './app.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import GiButton from './components/gibutton/GiButton';
import Separator from './components/separator/Separator';
import Sum from './components/sum/Sum';
import Title from './components/tiltle/Title';
import Table from './components/table/Table';
import For from './components/for/For';

const App = () => {
  return (
    <Container className="backcontainer">
      <Header />

      <Col>
        <Row className="fruts">
          <GiButton type="green"> Especiarias </GiButton>
          <GiButton type="red"> Frutas </GiButton>
          <GiButton type="yellow"> Verduras </GiButton>
        </Row>
      </Col>

      <Separator/>

      <For/>

      {/* <Title type="primary">Este é um exemplo de primary</Title>
      <Title type="secondary">Este é um exemplo de secondary</Title>
      <Title type="normal">Este é um exemplo de normal</Title>
      
      <Sum number1={1} number2={5}/> */}

      <Footer/>

      {/* <Footer footerColor="blue" footerTextColor="white"> Opa, boa tarde!</Footer>
      <Footer footerColor="purple" footerTextColor="black" showRights> Opa, boa tarde!</Footer> */}

    </Container>
  );
}

export default App;
