describe('Good front for HomePage', () => {
	it('Go to home Page', () => {
		cy.visit('http://localhost:3000');
		cy.wait(1000);
	});

	it('Good title', () => {
		cy.get('#app-title').should('contain', 'Artists Book');
	});

	it('Good sub title', () => {
		cy.get('#app-sub-title').should('contain', 'Manage your favorite Artists');
	});

	it('Good number of buttons', () => {
		cy.get('button').should('have.length', 2);
	});

	it('Good name for create account button', () => {
		cy.get('#app-homePage-register-button').should('contain', 'Create an account');
	});

	it('Good name for login button', () => {
		cy.get('#app-homePage-login-button').should('contain', 'Login');
	});
});

describe('Create Account Button for HomePage', () => {
	it('Go to home Page', () => {
		cy.visit('http://localhost:3000');
		cy.wait(1000);
	});

	it('Good URL redirect for create account button', () => {
		cy.get('#app-homePage-register-button').click().url().should('eq', 'http://localhost:3000/register');
	});
});

describe('Login Button form HomePage', () => {
	it('Go to home Page', () => {
		cy.visit('http://localhost:3000');
		cy.wait(1000);
	});

	it('Good URL redirect for login button', () => {
		cy.get('#app-homePage-login-button').click().url().should('eq', 'http://localhost:3000/login');
	});
});
