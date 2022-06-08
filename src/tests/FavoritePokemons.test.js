import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 3', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it(`Teste se é exibida na tela a mensagem No favorite pokemon found, 
  caso a pessoa não tenha pokémons favoritos`, () => {
    const favoriteLink = screen.getByText(/favorite pokémons/i);
    userEvent.click(favoriteLink);

    const message = screen.getByText(/no favorite pokemon found/i);
    expect(message).toBeInTheDocument();
  });
  it('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    const moreDetails = screen.getByText(/more details/i);
    userEvent.click(moreDetails);

    const favoritado = screen.getByRole('checkbox');
    userEvent.click(favoritado);
    // const favorito = screen.getAllByText(/pikachu/i);

    const homeLink = screen.getByText(/home/i);
    userEvent.click(homeLink);

    const favoriteLink = screen.getByText(/favorite pokémons/i);
    userEvent.click(favoriteLink);
    const favorito = screen.getAllByText(/pikachu/i);

    expect(favorito[0]).toBeInTheDocument();
  });
});
