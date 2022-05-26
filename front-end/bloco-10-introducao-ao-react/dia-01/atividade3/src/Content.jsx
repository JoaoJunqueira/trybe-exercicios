import React from 'react'

// Essa parte do exercicio foi feita com o auxilio do gabarito fornecido pela trybe:
// https://app.betrybe.com/course/front-end/introducao-a-react/hello-world-no-react/solutions/4c79bcea-26c6-40d2-861d-a1b1dcdcadb7/gabarito-dos-exercicios-de-fixacao/a88b1ab4-00df-40b4-b4d3-298f09b3544f?use_case=calendar


const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render(){
          return (
              <div>
                  {conteudos.map((item) => { return(
                      <div key={item.conteudo}>
                          <h1>O conteúdo é: {item.conteudo}</h1>
                          <h2>Status: {item.status}</h2>
                          <h2>Bloco: {item.bloco}</h2>
                      </div>)
                  })}
              </div>
          )
    }
}

export default Content