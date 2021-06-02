import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Car = () => {
  const total = [

  ];

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
            <td>56</td>
          </tr>
          <tr>
            <td>Frutas</td>
            <td>56</td>
          </tr>
          <tr>
            <td>Legumes</td>
            <td>56</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>56</td>
          </tr>
        </tbody>
      </Table>
      <Button> Pagar </Button>
    </div>
  );
};

export default Car;
