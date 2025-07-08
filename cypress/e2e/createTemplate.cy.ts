describe('Create Habit Template - Flujos completos', () => {
  beforeEach(() => {
    cy.window().then((win) => win.localStorage.setItem('token', 'test-token'));
    cy.visit('/#/create-template');
  });

  function selectDropdown(label: string, optionText: string) {
    cy.contains(label).parent().click();
    cy.contains(optionText).click();
  }

  it('Flujo exitoso completo', () => {
    cy.get('input[type="text"]').first().type('Leer');
    cy.get('textarea#descripcion').type('Leer un libro');
    selectDropdown('Ícono del hábito', 'Libro');
    selectDropdown('Color del ícono', '#A4B1FF');
    selectDropdown('Grupo general del hábito', 'Lectura');
    selectDropdown('Criterio de cumplido del hábito', 'Hacer');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    selectDropdown('Tipo de hábito', 'Deslizar');
    cy.get('input[type="number"]').type('1');
    selectDropdown('Unidad de medida del hábito', 'veces');
    selectDropdown('Días a realizar el hábito', 'Lunes');
    cy.get('body').click(0, 0); // cerrar dropdown
    cy.get('input[type="time"]').type('08:30');
    cy.contains('button', 'Crear').click();
  });

  it('No permite crear sin completar campos obligatorios', () => {
    cy.contains('button', 'Crear').click();
    cy.url().should('include', '/create-template');
  });

  it('Campo numérico inválido (cero)', () => {
    cy.get('input[type="text"]').first().type('Test');
    cy.get('textarea#descripcion').type('Descripción');
    selectDropdown('Ícono del hábito', 'Correr');
    selectDropdown('Color del ícono', '#A4B1FF');
    selectDropdown('Grupo general del hábito', 'Deporte');
    selectDropdown('Criterio de cumplido del hábito', 'Hacer');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    selectDropdown('Tipo de hábito', 'Deslizar');
    cy.get('input[type="number"]').type('0');
    selectDropdown('Unidad de medida del hábito', 'veces');
    selectDropdown('Días a realizar el hábito', 'Lunes');
    cy.get('body').click(0, 0);
    cy.get('input[type="time"]').type('09:00');
    cy.contains('button', 'Crear').click();
    cy.url().should('include', '/create-template'); // debería quedarse en la misma página
  });

  it('No permite enviar sin recordatorio', () => {
    cy.get('input[type="text"]').first().type('Sin recordatorio');
    cy.get('textarea#descripcion').type('Probando sin recordatorio');
    selectDropdown('Ícono del hábito', 'Cerebro');
    selectDropdown('Color del ícono', '#FFB6A4');
    selectDropdown('Grupo general del hábito', 'Salud Mental');
    selectDropdown('Criterio de cumplido del hábito', 'Hacer');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    selectDropdown('Tipo de hábito', 'Deslizar');
    cy.get('input[type="number"]').type('3');
    selectDropdown('Unidad de medida del hábito', 'minutos');
    selectDropdown('Días a realizar el hábito', 'Martes');
    cy.get('body').click(0, 0);
    cy.get('input[type="time"]').clear(); // borra recordatorio
    cy.contains('button', 'Crear').click();
    cy.url().should('include', '/create-template'); // debe fallar
  });

  it('Permite seleccionar múltiples días', () => {
    cy.get('input[type="text"]').first().type('Hábito múltiple');
    cy.get('textarea#descripcion').type('Con varios días');
    selectDropdown('Ícono del hábito', 'Cama');
    selectDropdown('Color del ícono', '#A4D6FF');
    selectDropdown('Grupo general del hábito', 'Sueño');
    selectDropdown('Criterio de cumplido del hábito', 'Hacer');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    selectDropdown('Tipo de hábito', 'Chequear');
    cy.get('input[type="number"]').type('1');
    selectDropdown('Unidad de medida del hábito', 'horas');
    selectDropdown('Días a realizar el hábito', 'Lunes');
    selectDropdown('Días a realizar el hábito', 'Miércoles');
    selectDropdown('Días a realizar el hábito', 'Viernes');
    cy.get('body').click(0, 0);
    cy.get('input[type="time"]').type('07:30');
    cy.contains('button', 'Crear').click();
  });

  it('Permite combinación atípica: tipo "Dejar" + unidad "ml"', () => {
    cy.get('input[type="text"]').first().type('Evitar café');
    cy.get('textarea#descripcion').type('Reducir consumo de café');
    selectDropdown('Ícono del hábito', 'Café');
    selectDropdown('Color del ícono', '#FFAA55');
    selectDropdown('Grupo general del hábito', 'Salud');
    selectDropdown('Criterio de cumplido del hábito', 'Dejar');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    selectDropdown('Tipo de hábito', 'Deslizar');
    cy.get('input[type="number"]').type('300');
    selectDropdown('Unidad de medida del hábito', 'ml');
    selectDropdown('Días a realizar el hábito', 'Martes');
    cy.get('body').click(0, 0);
    cy.get('input[type="time"]').type('10:00');
    cy.contains('button', 'Crear').click();
  });
});
