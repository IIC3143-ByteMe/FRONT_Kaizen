describe('Logout functionality', () => {
  beforeEach(() => {
    // set token to simulate logged in user
    cy.window().then((win) => win.localStorage.setItem('token', 'test-token'));
    cy.visit('/#/dashboard');
  });

  it('removes token and redirects to login', () => {
    cy.contains('Cerrar sesión').click();
    cy.url().should('include', '#/login');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.equal(null);
    });
  });
});
