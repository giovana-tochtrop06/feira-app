import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import "./checkout.css";

const Checkout = () => {
  const onClick = () => {
    localStorage.setItem('Test', 'ola');
  }
  return(
    <Row className="margin">
      <Col md={{span: 8, offset: 2}}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md={8}>
              <Form.Label>NOME COMPLETO</Form.Label>
              <Form.Control type="tel"/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>CPF</Form.Label>
              <Form.Control type="tel"/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={9}>
              <Form.Label>ENDEREÇO</Form.Label>
              <Form.Control/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>COMPLEMENTO</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>CEP</Form.Label>
              <Form.Control/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>TELEFONE CELULAR</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Col as={Col}>
              ESCOLHA COMO PAGAR
            </Col>
            <Col as={Col}>
              <Form.Check
                type="radio"
                label="CARTÃO DE CRÉDITO"
              />
              <Form.Check
                type="radio"
                label="CARTÃO DE DÉBITO"
              />
              <Form.Check
                type="radio"
                label="PIX"
              />              
            </Col>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} md={6}>
              <Form.Label>NÚMERO DO CARTÃO</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={6}>
              <Form.Label>NOME DO TITULAR</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={3}>
              <Form.Label>VALIDADE</Form.Label>
              <Form.Control/>
            </Form.Group>

            <Form.Group as={Col} md={3}>
              <Form.Label>CVV</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Salvar cartão para futuras compras" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Finalizar
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Checkout;
