import React from 'react'
import './App.css';

const itens = [
  'banho no cachorro',
  'limpar a casa',
  'pintar a parede',
  'tirar as teias de aranha da parede',
  'jogar o lixo forar',
  'consertar a ordem da lista'
]

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {itens.map((item) => Task(item))}
    </div>
  );
}

export default App;
