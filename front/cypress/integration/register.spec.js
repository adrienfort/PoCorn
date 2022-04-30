describe('Good front for RegisterPage', () => {
	it('Go to register Page', () => {
		cy.visit('http://localhost:3000/register');
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
		cy.get('input').should('have.length', 3);
	});

	it('Good name for register button', () => {
		cy.get('#app-registerPage-register-button').should('contain', 'Register');
	});

	it('Good name for login button', () => {
		cy.get('#app-registerPage-login-button').should('contain', 'Login');
	});
});

describe('Login Button for RegisterPage', () => {
	it('Go to register Page', () => {
		cy.visit('http://localhost:3000/register');
		cy.wait(1000);
	});

	it('Good URL redirect for login button', () => {
		cy.get('#app-registerPage-login-button').click().url().should('eq', 'http://localhost:3000/login');
	});
});
