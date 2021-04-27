import { Table } from 'react-bootstrap';
import React from "react";

function AulaFor() {
  // const numbers = [10, 20, 30, 40];
  // const newNumbers = [];

  // for (let i = 0; i < numbers.length; i++) {
  //   newNumbers.push(numbers[i] * 10)
  // }
  
  // numbers.forEach((n) => {
  //   newNumbers.push(n * 10)
  // });

  // const sum = (a, b) => {
  //   return a + b;
  // };

  const animals = [
    {name: 'Gato', maxAge: 20, animalClass: 'Felino'},
    {name: 'Cachorro', maxAge: 16, animalClass: 'Canino'},
    {name: 'Arara Azul', maxAge: 50, animalClass: 'Ave'},
    {name: 'Tartaruga', maxAge: 100, animalClass: 'Cágado'},
  ]


  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Nome</th>
          <th>Idade Máxima</th>
          <th>Tipo</th>
        </tr>
        </thead>
        <tbody>
        {animals.map((animal) =>
          <TableRow animalClass={animal.animalClass} maxAge={animal.maxAge} name={animal.name} />
        )}
        </tbody>
      </Table>

    </div>
  );
}

const TableRow = ({name, maxAge, animalClass}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{maxAge}</td>
      <td>{animalClass}</td>
    </tr>
  );
};

export default AulaFor;