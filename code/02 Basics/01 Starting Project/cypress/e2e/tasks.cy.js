describe('tasks managements', () => {
    it('should open and close new task model', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('.backdrop').click({force: true})
    });
})
