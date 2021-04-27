import {Table} from 'react-bootstrap';
import React from 'react';

// import './for.css'

const For = () => {
  const requests = [
    {name: 'Julia', age: 20, lookingFor: 'Frutas'},
    {name: 'Alberto', age: 45, lookingFor: 'Frutas'},
    {name: 'Joana', age: 56, lookingFor: 'Especiarias'},
    {name: 'Clara', age: 21, lookingFor: 'Legumes'},
  ]

    return(
        <div className="App">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>A procura de:</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) =>
                <TableRow name={request.name} age={request.age} lookingFor={request.lookingFor} />
              )}
            </tbody>
          </Table>
        </div>
    );
};

const TableRow = ({name, age, lookingFor}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{lookingFor}</td>
    </tr>
  );
};


export default For;