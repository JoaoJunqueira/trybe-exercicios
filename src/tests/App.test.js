import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 1', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação.',
    () => {
      renderWithRouter(<App />);
      const home = screen.getByText(/home/i);
      expect(home).toBeInTheDocument();

      const about = screen.getByText(/about/i);
      expect(about).toBeInTheDocument();

      const favorites = screen.getByText(/favorite pokémons/i);
      expect(favorites).toBeInTheDocument();
    });
  test(`Teste se a aplicação é redirecionada para a página inicial,
   na URL / ao clicar no link Home da barra de navegação.`, () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test(`Teste se a aplicação é redirecionada para a página de About,
  na URL /about, ao clicar no link About da barra de navegação.`, () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test(`Teste se a aplicação é redirecionada para a página de Pokémons Favoritados,
  na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação.`, () => {
    const { history } = renderWithRouter(<App />);

    const favoritesLink = screen.getByText(/favorite pokémons/i);
    expect(favoritesLink).toBeInTheDocument();
    userEvent.click(favoritesLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  test(`Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma
   URL desconhecida.`, () => {
    const { history } = renderWithRouter(<App />);

    history.push('/*');

    const notFound = screen.getByText(/not found/i);
    expect(notFound).toBeInTheDocument();
  });
});

// Fontes:
// https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-testando-react-router/58c480e0-79ed-47bd-a819-f88d82997927/conteudos/9980d5d6-2735-41e9-b390-6393d46f5311/escrevendo-os-testes-da-aplicacao/06fc36d3-4e45-4f90-a084-8249f22c78a8?use_case=next_button
// https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/primeiros-passos-em-jest/eb321d06-e126-4c84-8d7e-6134973bf081/conteudos/3ea37d85-2a2a-4a3d-bed5-9fdc9102e994/escrevendo-testes/9383727e-898e-4471-a752-ad9fe3481d19?use_case=side_bar
// https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-testando-react-router/58c480e0-79ed-47bd-a819-f88d82997927/conteudos/9980d5d6-2735-41e9-b390-6393d46f5311/escrevendo-os-testes-da-aplicacao/06fc36d3-4e45-4f90-a084-8249f22c78a8?use_case=side_bar
