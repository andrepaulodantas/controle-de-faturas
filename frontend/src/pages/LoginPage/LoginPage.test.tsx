import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../LoginPage';

describe('LoginPage', () => {
  test('renders login form', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    expect(screen.getByLabelText(/Usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
  });

  test('allows user to fill out the form', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const usernameInput = screen.getByLabelText(/Usuário/i);
    const passwordInput = screen.getByLabelText(/Senha/i);

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(usernameInput).toHaveValue('admin');
    expect(passwordInput).toHaveValue('password');
  });

  test('submits the form', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const usernameInput = screen.getByLabelText(/Usuário/i);
    const passwordInput = screen.getByLabelText(/Senha/i);
    const submitButton = screen.getByRole('button', { name: /Entrar/i });

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    // Verify expected actions after form submission
  });
});
