import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Requisito 2', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });
  test('Teste se a página contém as informações sobre a Pokédex.', () => {
    const pokedex = screen.getByRole('heading', { name: /pokédex/i });
    expect(pokedex).toBeInTheDocument();
  });
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const aboutPokedex = screen.getByRole(
      'heading',
      { name: /about pokédex/i },
      { level: 2 },
    );
    expect(aboutPokedex).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const text11 = 'This application simulates a Pokédex, ';
    const text12 = 'a digital encyclopedia containing all Pokémons';
    const text1 = text11 + text12;
    const text21 = 'One can filter Pokémons by type,';
    const text22 = ' and see more details for each one of them';
    const text2 = text21 + text22;
    const paragraph1 = screen.getByText(text1);
    expect(paragraph1).not.toBeNull();
    const paragraph2 = screen.getByText(text2);
    expect(paragraph2).not.toBeNull();
  });
  test(`Teste se a página contém a seguinte imagem de uma Pokédex:
        https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`,
  () => {
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const pokedexImage = screen.getByRole('img');
    expect(pokedexImage.src).toContain(url);
  });
});

// Fontes:
// https://testing-library.com/docs/queries/about/#byrole
// https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-testando-react-router/58c480e0-79ed-47bd-a819-f88d82997927/conteudos/9980d5d6-2735-41e9-b390-6393d46f5311/escrevendo-os-testes-da-aplicacao/06fc36d3-4e45-4f90-a084-8249f22c78a8?use_case=side_bar
// https://dev.to/raphaelchaula/a-simple-image-test-in-react-3p6f
// https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
