import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import getValue from '../../helpers/getValue';

const Car = ({history}) => {
  const especiariasValue = getValue('especiarias');
  const frutasValue = getValue('frutas');
  const legumesValue = getValue('legumes');

  const onPayment = () => {
    localStorage.setItem("total", legumesValue + frutasValue + especiariasValue);
    history.push('/checkout');
  };

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
        <Button onClick={onPayment}> Pagar </Button>
    </div>
  );
};

export default withRouter(Car);
