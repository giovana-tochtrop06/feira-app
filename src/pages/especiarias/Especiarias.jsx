import React, {useState} from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Especiarias = () => {
  const [total, setTotal] = useState(0);

  const list = [
    {spice: 'Açafrão 100g', price: 15},
    {spice: 'Páprica 100g', price: 14},
    {spice: 'Tomilho 100g', price: 13},
    {spice: 'Noz Moscada 100g', price: 12},
    {spice: 'Pimenta do Reino 100g', price: 11},
  ]
  
  const ListRow = ({spice, price}) => {
    const onClick = () => {
      setTotal(price + total);
    }

    return (
      <tr>
        <td>{spice}</td>
        <td>R$ {price}</td>
        <td>
          <Button variant="outline-warning" onClick={onClick}>Adicionar</Button>
        </td>
      </tr>      
    )
  }

  return(
    <Row>
      <Col md={{span: 8, offset: 2}}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Especiaria</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {list.map((listinha) =>
            <ListRow spice={listinha.spice} price={listinha.price} />
          )}
          </tbody>
          <tr>
            <td colSpan={2}>
              Total:
            </td>
            <td>
              R$ {total}
            </td>
            <td>
              <Link to="/carrinho">
                <Button variant="outline-warning">Finalizar</Button>
              </Link>
            </td>
          </tr>
        </Table>
      </Col>
    </Row>
  )
}

export default Especiarias;
