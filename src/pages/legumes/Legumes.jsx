import React, {useState, useEffect} from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Legumes = () => {
  const initialValue = parseInt(localStorage.getItem('legumes') || 0);
  const [total, setTotal] = useState(initialValue);
  useEffect(() => {
    saveValue();
  },[total]);

  const list = [
    {vegetable: 'Tomate 1kg', price: 5},
    {vegetable: 'Cebola 1kg', price: 6},
    {vegetable: 'Beterraba 1kg', price: 4},
    {vegetable: 'Pimentão 1kg', price: 9},
    {vegetable: 'Cenoura 1kg', price: 7},
  ];

  const saveValue = () => {
    localStorage.setItem('legumes', total)
  }

  const ListRow = ({vegetable, price}) => {
    const onClick = () => {
      setTotal(price + total);
    };

    return(
      <tr>
        <td>{vegetable}</td>
        <td>R$ {price}</td>
        <td>
          <Button variant="outline-warning" onClick={onClick}>Adicionar</Button>
        </td>
      </tr>   
    )
  };

  return(
    <Row>
      <Col md={{span: 8, offset: 2}}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Legumes</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((listinha) =>
              <ListRow vegetable={listinha.vegetable} price={listinha.price} />
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
};

export default Legumes;
