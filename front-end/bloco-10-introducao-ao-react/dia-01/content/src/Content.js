import React from "react";
import './App.css';

class Content extends React.Component {
    render() {
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
        const list = (conteudo) => {
            return(
                <div className="Content">
                    <h2>O conteúdo é: {conteudo.conteudo}</h2>
                    <h2>Status: {conteudo.status}</h2>
                    <h2>Bloco: {conteudo.bloco}</h2>
                </div>
            )
        }
        return(
            <div>
                {conteudos.map((conteudo) => list(conteudo))}
            </div>
        )
    }
}

export default Content;