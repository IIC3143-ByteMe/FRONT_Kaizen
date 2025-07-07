describe('Create habit template', () => {
  beforeEach(() => {
    cy.window().then((win) => win.localStorage.setItem('token', 'test-token'));
    cy.visit('/#/create-template');
  });

  it('fills form and sends request', () => {

    cy.get('input[type="text"]').eq(0).type('Leer');
    cy.get('input[type="text"]').eq(1).type('Leer un libro');

    cy.get('select').eq(0).select('running');
    cy.get('select').eq(1).select('#A4B1FF');
    cy.get('select').eq(2).select('Healthy');
    cy.get('select').eq(3).select('Build');
    cy.get('select').eq(4).select('Diariamente');

    cy.get('input[type="number"]').type('1');

    cy.get('select').eq(5).select('veces');
    cy.get('select').eq(6).select('Lunes');

    cy.get('input[type="time"]').type('08:30');

    cy.get('select').eq(7).select('Misión');

    cy.contains('button', 'Guardar').click();
  });
});
