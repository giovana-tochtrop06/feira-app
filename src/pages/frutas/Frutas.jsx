import React, {useState} from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Frutas = () => {
  const [total, setTotal] = useState(0);

  const list = [
    {fruit: 'Morango 1kg', price: 4},
    {fruit: 'Abacaxi 1kg', price: 5},
    {fruit: 'Laranja 1kg', price: 3},
    {fruit: 'Banana 1kg', price: 4},
    {fruit: 'Maracujá 1kg', price: 6},
  ]

  const ListRow = ({fruit, price}) => {
    const onClick = () => {
      setTotal(price + total);
    }

    return(
      <tr>
        <td>{fruit}</td>
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
            <th>Frutas</th>
            <th>Preço</th>
            <th></th>
          </thead>
          <tbody>
            {list.map((listinha) =>
              <ListRow fruit={listinha.fruit} price={listinha.price} />
            )}
          </tbody>
          <tr>
            <td colSpan={1}>
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

export default Frutas;