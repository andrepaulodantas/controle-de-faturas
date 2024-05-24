import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders header element', () => {
  render(<App />);
  const headerElement = screen.getByText(/Biblioteca de Faturas/i);
  expect(headerElement).toBeInTheDocument();
});
