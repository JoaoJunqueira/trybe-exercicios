import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  state = {
    botao1: 0,
    botao2: 0,
    botao3: 0,
    color1: '',
    color2: '',
    color3: '',
  }

  handleClick = () => {
    this.setState({ botao1: this.state.botao1 + 1 })
    if( this.state.botao1 % 2 !== 0 ){
      this.setState({ color1: 'blue' })
      console.log('blue')
    }
    else {
      this.setState({ color1: '' })
      console.log('default');
    }
  }

  handleClick2 = () => {
    this.setState({ botao2: this.state.botao2 + 1 })
    if( this.state.botao2 % 2 !== 0 ){
      this.setState({ color2: 'green' })
      console.log('green')
    }
    else {
      this.setState({ color2: '' })
      console.log('default')
    }
  }

  handleClick3 = () => {
    this.setState({ botao3: this.state.botao3 + 1 })
    if( this.state.botao3 % 2 !== 0 ){
      this.setState({ color3: 'red' })
      console.log('red')
    }
    else {
      this.setState({ color3: '' })
      console.log('default')
    }
  }

  render() {
  return (<div><button onClick={this.handleClick} style={{ backgroundColor: this.state.color1 }}>{this.state.botao1}</button><button onClick={this.handleClick2} style={{ backgroundColor: this.state.color2 }}>{this.state.botao2}</button><button onClick={this.handleClick3} style={{ backgroundColor: this.state.color3 }}>{this.state.botao3}</button></div>)
  }
}

export default App;

// Exercício concluído
// Objetivo: Criar três botões lado a lado, com funções diferentes no react