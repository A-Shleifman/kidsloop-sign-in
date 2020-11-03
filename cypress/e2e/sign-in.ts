import { buildUser } from 'support/generate';

it('allows to sign in with username and password', () => {
  const user = buildUser();

  cy.visit('/');

  cy.findByPlaceholderText(/^email or phone/i).type(user.email);

  cy.findByPlaceholderText(/password/i).type(user.password);

  cy.findByRole('button', { name: /sign in/i }).click();
});
