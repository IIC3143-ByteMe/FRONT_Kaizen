describe('Logout functionality', () => {
  beforeEach(() => {
    cy.window().then((win) => win.localStorage.setItem('token', 'test-token'));
    cy.visit('/#/dashboard');
  });

  it('remueve el token y redirige al login', () => {
    cy.contains('Cerrar sesión').click({ force: true }); 
    cy.url().should('include', '/#/login');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.be.null;
    });
  });
});
