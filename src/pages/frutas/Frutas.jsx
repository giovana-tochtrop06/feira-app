import React, {useState, useEffect} from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Frutas = () => {
  const initialValue = parseInt(localStorage.getItem('frutas') || 0);
  const [total, setTotal] = useState(initialValue);
  useEffect(() => {
    saveValue();
  },[total]);

  const list = [
    {fruit: 'Morango 1kg', price: 4},
    {fruit: 'Abacaxi 1kg', price: 5},
    {fruit: 'Laranja 1kg', price: 3},
    {fruit: 'Banana 1kg', price: 4},
    {fruit: 'Maracujá 1kg', price: 6},
  ]

  const saveValue = () => {
    localStorage.setItem('frutas', total)
  }

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
            <td>
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
