//LIB EXTERNA 
import React from 'react';
import { Button, Container } from 'react-bootstrap';

//IMPORTS INTERNOS 
import './app.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Container>
      <Header />
      
      <Footer footerColor="blue"/>
      <Footer footerColor="purple" content="olá"/>
    </Container>
  );
}

export default App;
