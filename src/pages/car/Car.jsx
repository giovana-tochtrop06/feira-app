import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = () => {
  const especiariasValue = parseInt(localStorage.getItem('especiarias') || 0);
  const frutasValue = parseInt(localStorage.getItem('frutas') || 0);
  const legumesValue = parseInt(localStorage.getItem('legumes') || 0);

  return(
    <div className="App">
      <Table striped bordered hover>   
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Especiarias</td>
            <td>R$ {especiariasValue}</td>
          </tr>
          <tr>
            <td>Frutas</td>
            <td>R$ {frutasValue}</td>
          </tr>
          <tr>
            <td>Legumes</td>
            <td>R$ {legumesValue}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>R$ {legumesValue + frutasValue + especiariasValue}</td>
          </tr>
        </tbody>
      </Table>
      <Link to="/checkout">
        <Button> Pagar </Button>
      </Link>
    </div>
  );
};

export default Car;
