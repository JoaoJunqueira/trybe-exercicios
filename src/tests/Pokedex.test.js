import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 5', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons;', () => {
    const headingText = screen.getByRole('heading', { level: 2 });
    expect(headingText).toBeInTheDocument();
    expect(headingText.innerHTML).toBe('Encountered pokémons');
  });
  it(`Teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon 
  é clicado`, () => {
    // O botão deve conter o texto Próximo pokémon
    const nextPokemon = screen.getAllByRole('button');
    expect(nextPokemon[nextPokemon.length - 1].innerHTML).toBe('Próximo pokémon');

    // Os próximos pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão

    userEvent.click(nextPokemon[nextPokemon.length - 1]);
    const pokemon1 = screen.getByText(/charmander/i);
    expect(pokemon1).toBeInTheDocument();

    const nextPokemon2 = screen.getAllByRole('button');
    userEvent.click(nextPokemon2[nextPokemon2.length - 1]);
    const pokemon2 = screen.getByText(/caterpie/i);
    expect(pokemon2).toBeInTheDocument();

    const nextPokemon3 = screen.getAllByRole('button');
    userEvent.click(nextPokemon3[nextPokemon3.length - 1]);
    const pokemon3 = screen.getByText(/ekans/i);
    expect(pokemon3).toBeInTheDocument();

    // Retorna ao primeiro pokémon

    const all = screen.getByText(/all/i);
    userEvent.click(all);

    // O primeiro pokémon da lista deve ser mostrado ao clicar no botão, se estiver
    // no último pokémon da lista.

    const next = screen.getByText(/próximo pokémon/i);
    userEvent.click(next);
    userEvent.click(next);
    userEvent.click(next);
    userEvent.click(next);
    userEvent.click(next);
    userEvent.click(next);
    userEvent.click(next);
    userEvent.click(next);
    const lastOne = screen.getByText(/dragonair/i);
    expect(lastOne).toBeInTheDocument();
    userEvent.click(next);
    const firstOne = screen.getByText(/pikachu/i);
    expect(firstOne).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um pokémon por vez', () => {
    const identifiers1 = screen.getAllByText(/more details/i);
    expect(identifiers1.length).toBe(1);
    const next = screen.getByText(/próximo pokémon/i);
    userEvent.click(next);
    const identifiers2 = screen.getAllByText(/more details/i);
    expect(identifiers2.length).toBe(1);
    userEvent.click(next);
    const identifiers3 = screen.getAllByText(/more details/i);
    expect(identifiers3.length).toBe(1);
  });
  it('Teste se a Pokédex tem os botões de filtro', () => {
    // Deve existir um botão de filtragem para cada tipo de pokémon, sem repetição

    // O texto do botão deve corresponder ao nome do tipo, ex. Psychic
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const qnt = 7;
    expect(buttons.length).toBe(qnt);
    expect(buttons[0].innerHTML).not.toBe('');

    // A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos
    // pokémons daquele tipo
    const selButtons = screen.getAllByRole('button');
    userEvent.click(selButtons[5]);
    const psyOne = screen.getByText(/alakazam/i);
    expect(psyOne).toBeInTheDocument();
    const next = screen.getByText(/próximo pokémon/i);
    userEvent.click(next);
    const psyTwo = screen.getByText(/mew/i);
    expect(psyTwo).toBeInTheDocument();

    // O botão All precisa estar sempre visível.
    const all = screen.getByRole('button', { name: /all/i }, { hidden: false });
    expect(all).toBeInTheDocument();
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    // O texto do botão deve ser All
    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeInTheDocument();

    // Ao carregar a página, o filtro selecionado deverá ser All

    const firstOne = screen.getByText(/pikachu/i);
    expect(firstOne).toBeInTheDocument();
    const next = screen.getByText(/próximo pokémon/i);
    userEvent.click(next);

    const secondOne = screen.getByText(/charmander/i);
    expect(secondOne).toBeInTheDocument();

    userEvent.click(next);
    const thirdOne = screen.getByText(/caterpie/i);
    expect(thirdOne).toBeInTheDocument();

    // A Pokedéx deverá mostrar os pokémons normalmente (sem filtros) quando o botão All for clicado
    userEvent.click(all);
    expect(firstOne).toBeInTheDocument();
    userEvent.click(next);
    expect(secondOne).toBeInTheDocument();
    userEvent.click(next);
    expect(thirdOne).toBeInTheDocument();
  });
});

//
