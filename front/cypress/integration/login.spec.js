describe('Good front for LoginPage', () => {
	it('Go to login Page', () => {
		cy.visit('http://localhost:3000/login');
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

	it('Good number of inputs', () => {
		cy.get('input').should('have.length', 2);
	});

	it('Good name for login button', () => {
		cy.get('#app-loginPage-login-button').should('contain', 'Login');
	});

	it('Good name for register button', () => {
		cy.get('#app-loginPage-register-button').should('contain', 'Register');
	});
});

describe('Register Button for LoginPage', () => {
	it('Go to login Page', () => {
		cy.visit('http://localhost:3000/login');
		cy.wait(1000);
	});

	it('Good URL redirect for register button', () => {
		cy.get('#app-loginPage-register-button').click().url().should('eq', 'http://localhost:3000/register');
	});
});
