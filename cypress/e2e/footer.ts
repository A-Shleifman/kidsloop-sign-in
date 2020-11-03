it('allows to select a language', () => {
  cy.visit('/');

  cy.get('select').select('English').should('have.value', 'English');
});

it('allows to toggle dark theme', () => {
  cy.visit('/');

  cy.findByTestId('theme-toggle').click().should('have.class', 'dark:text-white');
});
