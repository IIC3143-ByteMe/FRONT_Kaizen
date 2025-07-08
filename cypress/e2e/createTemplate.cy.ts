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
    cy.get('input[type="text"]').first().clear().type('Leer');
    cy.get('textarea#descripcion').clear().type('Leer un libro');
    selectDropdown('Ícono del hábito', 'Libro');
    selectDropdown('Color del ícono', '#A4B1FF');
    selectDropdown('Grupo general del hábito', 'Lectura');
    selectDropdown('Criterio de cumplido del hábito', 'Hacer');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    cy.get('input[type="number"]').clear().type('1');
    selectDropdown('Unidad de medida del hábito', 'veces');
    selectDropdown('Días a realizar el hábito', 'Lunes');
    cy.get('input[type="time"]').clear().type('08:30');
    cy.contains('button', 'Crear').click();
    cy.contains('Plantilla creada!'); // validación de feedback
  });

  it('No permite crear sin completar campos obligatorios', () => {
    cy.get('input[type="text"]').first().clear();
    cy.get('textarea#descripcion').clear();
    cy.get('input[type="number"]').clear();
    cy.get('input[type="time"]').clear();
    cy.contains('button', 'Crear').click();
    cy.url().should('include', '/create-template');
  });

  it('Campo numérico inválido (cero)', () => {
    cy.get('input[type="text"]').first().clear().type('Test');
    cy.get('textarea#descripcion').clear().type('Descripción');
    selectDropdown('Ícono del hábito', 'Correr');
    selectDropdown('Color del ícono', '#A4B1FF');
    selectDropdown('Grupo general del hábito', 'Deporte');
    selectDropdown('Criterio de cumplido del hábito', 'Hacer');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    cy.get('input[type="number"]').clear().type('0'); // inválido por min=1
    selectDropdown('Unidad de medida del hábito', 'veces');
    selectDropdown('Días a realizar el hábito', 'Lunes');
    cy.get('input[type="time"]').clear().type('09:00');
    cy.contains('button', 'Crear').click();
    cy.url().should('include', '/create-template');
  });

  it('No permite enviar sin recordatorio', () => {
    cy.get('input[type="text"]').first().clear().type('Sin recordatorio');
    cy.get('textarea#descripcion').clear().type('Probando sin recordatorio');
    selectDropdown('Ícono del hábito', 'Cerebro');
    selectDropdown('Color del ícono', '#FFB6A4');
    selectDropdown('Grupo general del hábito', 'Salud Mental');
    selectDropdown('Criterio de cumplido del hábito', 'Hacer');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    cy.get('input[type="number"]').clear().type('3');
    selectDropdown('Unidad de medida del hábito', 'minutos');
    selectDropdown('Días a realizar el hábito', 'Martes');
    cy.get('input[type="time"]').clear(); // borrar
    cy.contains('button', 'Crear').click();
    cy.url().should('include', '/create-template');
  });

  it('Permite seleccionar múltiples días', () => {
    cy.get('input[type="text"]').first().clear().type('Hábito múltiple');
    cy.get('textarea#descripcion').clear().type('Con varios días');
    selectDropdown('Ícono del hábito', 'Cama');
    selectDropdown('Color del ícono', '#A4D6FF');
    selectDropdown('Grupo general del hábito', 'Sueño');
    selectDropdown('Criterio de cumplido del hábito', 'Hacer');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    cy.get('input[type="number"]').clear().type('1');
    selectDropdown('Unidad de medida del hábito', 'horas');
    selectDropdown('Días a realizar el hábito', 'Lunes');
    selectDropdown('Días a realizar el hábito', 'Miércoles');
    selectDropdown('Días a realizar el hábito', 'Viernes');
    cy.get('input[type="time"]').clear().type('07:30');
    cy.contains('button', 'Crear').click();
    cy.contains('Plantilla creada!');
  });

  it('Permite combinación atípica: tipo "Dejar" + unidad "ml"', () => {
    cy.get('input[type="text"]').first().clear().type('Evitar café');
    cy.get('textarea#descripcion').clear().type('Reducir consumo de café');
    selectDropdown('Ícono del hábito', 'Café');
    selectDropdown('Color del ícono', '#FFAA55');
    selectDropdown('Grupo general del hábito', 'Salud');
    selectDropdown('Criterio de cumplido del hábito', 'Dejar');
    selectDropdown('Cada cuánto se debe cumplir el hábito', 'Diariamente');
    cy.get('input[type="number"]').clear().type('300');
    selectDropdown('Unidad de medida del hábito', 'ml');
    selectDropdown('Días a realizar el hábito', 'Martes');
    cy.get('input[type="time"]').clear().type('10:00');
    cy.contains('button', 'Crear').click();
    cy.contains('Plantilla creada!');
  });
});
