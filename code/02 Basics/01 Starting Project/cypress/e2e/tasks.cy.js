describe('tasks managements', () => {
    it('should open and close new task model', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('.backdrop').click({force: true})
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        // With cancel button
        cy.contains('Add Task').click()
        cy.contains('Cancel').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
    });

    it('should create a new task', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('New Task')
        cy.get('#summary').type('Some Description')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.get('.task').should('have.length', 1)
        cy.get('.task h2').contains('New Task')
        cy.get('.task p').contains('Some Description')
    });

    it('should validate user input', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('.modal').contains('Add Task').click()
        cy.contains('Please provide values')

    });

    it('should filter task', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('New Task')
        cy.get('#summary').type('Some Description')
        cy.get('#category').select('urgent')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.task').should('have.length', 1)
        cy.get('#filter').select('moderate')
        cy.get('.task').should('have.length', 0)
        cy.get('#filter').select('urgent')
        cy.get('.task').should('have.length', 1)
        cy.get('#filter').select('all')
        cy.get('.task').should('have.length', 1)
    });

    it('should add multiple tasks', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('Task 1')
        cy.get('#summary').type('First Task')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.task').should('have.length', 1)

        cy.contains('Add Task').click()
        cy.get('#title').type('Task 2')
        cy.get('#summary').type('Second Task')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.task').should('have.length', 2)
        cy.get('.task').eq(0).contains('First Task') // first()
        cy.get('.task').eq(1).contains('Second Task') // last()
    });
})
