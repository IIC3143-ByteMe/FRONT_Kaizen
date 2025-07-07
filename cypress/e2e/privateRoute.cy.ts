describe('Private routes', () => {
  beforeEach(() => {
    // ensure logged out by default
    cy.window().then((win) => win.localStorage.removeItem('token'));
  });

  it('redirects unauthenticated users to login', () => {
    cy.visit('/#/dashboard');
    cy.url().should('include', '#/login');
  });

  it('allows access when token exists', () => {
    cy.window().then((win) => win.localStorage.setItem('token', 'test-token'));
    cy.visit('/#/dashboard');
    cy.url().should('include', '#/dashboard');
  });
});
