import React from 'react';
import './app.css';
import Header from './components/header/Header';
import { Button } from 'react-bootstrap';
import Footer from './components/footer/Footer';

function App() {
  const name = 'gi';
  return (
    <div>
      <Header></Header>

      <Button variant="primary">Primary</Button>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
