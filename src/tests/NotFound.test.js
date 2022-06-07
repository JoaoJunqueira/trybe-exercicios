import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Requisito 4', () => {
  beforeEach(() => {
    renderWithRouter(<NotFound />);
  });
  it(`Teste se a página contém um heading h2
  com o texto Page requested not found 😭`,
  () => {
    const image = screen.getByLabelText('Crying emoji');
    const notFound = screen.getByText('Page requested not found');
    expect(notFound).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
  it('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen.getAllByRole('img');
    expect(image[1].src).toContain(url);
  });
});

// Fontes:
// https://stackoverflow.com/questions/56267336/react-testing-library-check-the-existence-of-empty-div
// https://testing-library.com/docs/queries/bylabeltext/
