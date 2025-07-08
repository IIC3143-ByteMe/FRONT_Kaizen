describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('muestra un mensaje de error si los campos están vacíos', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Completa todos los campos.').should('be.visible');
  });

  it('muestra error si el backend responde con error', () => {
    // Intercepta la solicitud para devolver un error simulado
    cy.intercept('POST', '**/auth/login', {
      statusCode: 401,
      body: {
        message: 'Invalid credentials'
      }
    }).as('loginRequest');

    cy.get('input[type="email"]').type('invalido@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginRequest');
    cy.contains('Credenciales inválidas o error del servidor').should('be.visible');
  });

  it('realiza login exitoso y redirige al dashboard', () => {
    cy.intercept('POST', '**/auth/login', {
      statusCode: 200,
      body: {
        access_token: 'fake-token'
      }
    }).as('loginSuccess');

    cy.get('input[type="email"]').type('admin@gmail.com');
    cy.get('input[type="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginSuccess');
    cy.url().should('include', '/#/dashboard');
  });
});
