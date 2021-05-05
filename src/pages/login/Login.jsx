import React from 'react';
import { Form, Col, Button, Row} from 'react-bootstrap';
import FormWrapper from '../../components/formWrapper/FormWrapper';

const Login = () => {
  const {Group, Label, Control} = Form;
  return (
      <Row>
        <Col md={{span: 4, offset: 4}}>
          <FormWrapper>
            <Form>
              <Form.Row>
                <Group as={Col} controlId="formGridEmail">
                  <Label>Email</Label>
                  <Control type="email" placeholder="Enter email" />
                </Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>
              <Button variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
          </FormWrapper>
        </Col>
      </Row>
  );
};

export default Login;
