import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import DashboardPage from '../Dashboard/DashboardPage';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('DashboardPage', () => {
  beforeEach(() => {
    mock.reset();
  });

  it('displays client numbers in dropdown', async () => {
    // Mock the API response
    mock.onGet('https://engdeveloper.com/api/invoices').reply(200, [
      { clientNumber: '7202788969' },
      { clientNumber: '1234567890' },
    ]);

    render(<DashboardPage />);

    fireEvent.mouseDown(screen.getByLabelText(/Selecionar Cliente/i));

    await waitFor(() => {
      expect(screen.getByRole('option', { name: '7202788969' })).toBeInTheDocument();
    });
  });
});
