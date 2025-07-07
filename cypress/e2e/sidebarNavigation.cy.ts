describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.window().then((win) => win.localStorage.setItem('token', 'test-token'));
    cy.visit('/#/dashboard');
  });

  it('navigates to Templates page', () => {
    cy.contains('Plantillas de Hábitos').click();
    cy.url().should('include', '#/templates');
    cy.contains('Plantillas').should('be.visible');
  });

  it('navigates to Analytics page', () => {
    cy.contains('Analytics').click();
    cy.url().should('include', '#/dashboard/analytics');
  });
});
