describe("ui testing:  https://www.saucedemo.com/", () => {

    it('I can log in using Valid credentials', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get("input#user-name").type('standard_user');
        cy.get("[name='password']").type('secret_sauce');
        cy.get('input#login-button').click();
        cy.get('.app_logo').should('exist');
        cy.contains('Product');
    });

    it('I cannot log in using Invalid credentials', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get("input#user-name").type('standard_user');
        cy.get("[name='password']").type('0000');
        cy.get('input#login-button').click();
        cy.get('h3').should('be.visible');
        cy.contains('Epic sadface: Username and password do not match any user in this service');
    });
})