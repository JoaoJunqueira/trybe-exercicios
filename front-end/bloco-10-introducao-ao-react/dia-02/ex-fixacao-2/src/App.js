// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    // Essa parte do código foi concluída seguindo um gabarito fornecido pela trybe. Fonte:
    // 

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        <Order order={headphone}/>
        <Order order={energyDrink}/>
      </div>
    );
  }
}

export default App;