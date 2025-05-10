/// <reference types="cypress" />
const user = {
    name: 'Gonzalo',
    lastname: 'Carmenado',
    secondLastname: 'xxxxx',
    phone: '123456789',
    email: 'email@mail.es',
    id: ""
}
describe('Comprueba el alta y la edición de un cliente.', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/api/v1/clients').as('getClients');

        cy.intercept('POST', '**/api/v1/clients').as('postClients');
    });

    it("Dar de alta un cliente nuevo", () => {
        cy.viewport(1900, 1200);
        cy.visit('/clients/list');

        cy.get('#add-client-button').click();
        cy.get('#save-button').click();
        cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
            .should('contain', 'El nombre es obligatorio.');
        cy.get('#input-name-client').click().type(user.name);

        cy.get('#input-lastName-client').click().type(user.lastname);
        cy.get('#input-lastName2-client').click().type(user.secondLastname);

        //Validación telefono vacio
        cy.get('#save-button').click();
        cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
            .should('contain', 'El teléfono es obligatorio.');

        //Validación formato telefono
        cy.get('#input-phone-client').click().type('texto');
        cy.get('#save-button').click();
        cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
            .should('contain', 'El formato del teléfono no es válido.');

        //Validación email obligatorio
        cy.get('#input-phone-client').clear();
        cy.get('#input-phone-client').click().type(user.phone);
        cy.get('#save-button').click();
        cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
            .should('contain', 'El email es obligatorio.');

        //Validación formato email 
        cy.get('#input-email-client').click().type('formato-mal');
        cy.get('#save-button').click();
        cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
            .should('contain', 'El formato del email no es válido.');

        cy.get('#input-email-client').clear();
        cy.get('#input-email-client').click().type(user.email);
        cy.get('#save-button').click();

        cy.wait('@postClients').then((interception) => {
            const { createdAt, ...actualUser } = interception.request.body;
            expect(actualUser).to.deep.equal(user);
            expect(interception.response?.statusCode).to.equal(201);
        });


    });
});
