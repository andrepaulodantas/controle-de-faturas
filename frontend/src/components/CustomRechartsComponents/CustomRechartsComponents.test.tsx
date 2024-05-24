import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomRechartsComponents from '../CustomRechartsComponents';
import { Invoice } from '../../types/invoice';

const invoices: Invoice[] = [
  {
    id: 1,
    clientNumber: '12345',
    referenceMonth: 'January',
    energyConsumption: 100,
    energyCost: 200,
    sceeeConsumption: 20,
    sceeeCost: 40,
    compensatedEnergy: 10,
    publicLightingContribution: 20,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  },
  {
    id: 2,
    clientNumber: '67890',
    referenceMonth: 'February',
    energyConsumption: 110,
    energyCost: 220,
    sceeeConsumption: 25,
    sceeeCost: 45,
    compensatedEnergy: 15,
    publicLightingContribution: 25,
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-02-10T00:00:00Z'
  }
];

test('renders energy consumption chart', () => {
  render(<CustomRechartsComponents invoices={invoices} />);
  const titleElement = screen.getByText(/Consumo de Energia/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders energy costs chart', () => {
  render(<CustomRechartsComponents invoices={invoices} />);
  const titleElement = screen.getByText(/Custos de Energia/i);
  expect(titleElement).toBeInTheDocument();
});
