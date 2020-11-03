import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import SignIn from 'features/SignIn';
import userEvent from '@testing-library/user-event';

const render = () => rtlRender(<SignIn />);

const getEmailField = () => screen.getByPlaceholderText(/^email or phone/i);
const getPasswordField = () => screen.getByPlaceholderText(/^password/i);
const getSignInButton = () => screen.getByRole('button', { name: /sign in/i });

it('displays logo', () => {
  render();

  expect(screen.getByAltText('logo')).toBeInTheDocument();
});

it('should have a heading', () => {
  render();

  expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
});

it('should have a password field', () => {
  render();

  expect(getPasswordField()).toBeInTheDocument();
});
