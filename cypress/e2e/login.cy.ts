const useMock = Cypress.env('useMock') === true || Cypress.env('useMock') === 'true';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('muestra un mensaje de error si los campos están vacíos', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Completa todos los campos.').should('be.visible');
  });

  it('muestra error si el backend responde con error', () => {
    if (useMock) {
      cy.intercept('POST', '**/auth/login', {
        statusCode: 401,
        body: {
          message: 'Unauthorized',
        },
      }).as('loginFail');
    }

    cy.get('input[type="email"]').type('invalido@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    if (useMock) {
      cy.wait('@loginFail');
    }

    cy.contains('Credenciales inválidas o error del servidor').should('be.visible');
  });

  it('realiza login exitoso y redirige al dashboard', () => {
    if (useMock) {
      cy.intercept('POST', '**/auth/login', {
        statusCode: 200,
        body: {
          access_token: 'fake-jwt-token',
        },
      }).as('loginSuccess');
    }

    cy.get('input[type="email"]').type('antonio.doberti@uc.cl');
    cy.get('input[type="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    if (useMock) {
      cy.wait('@loginSuccess');
    }

    cy.url().should('include', '/dashboard');
  });
});
