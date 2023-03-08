describe('Expenses', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display 1 item in expenses list', () => {
    cy.get('.expenses-list li').should('have.length', 1)
    cy.get('.expenses-list li h2').first().should('have.text', 'New hat')
  })

  it('can add a new expense', () => {
    const title = 'New boots'
    const amount = 70
    const date = '2023-04-05'

    cy.contains('Add New Expense').click()
    cy.get('form #title').type(`${title}`)
    cy.get('form #amount').type(`${amount}`)
    cy.get('form #date').type(`${date}`)
    cy.contains('Add Expense').click({force: true})

    cy.get('.expenses-list li h2').first().should('have.text', 'New boots')

  })

  it('can filter expenses by year', () => {
    cy.get('.expenses-filter__control select').select(1)
    cy.get('.expenses-list li').should('have.length', 2)
    cy.get('.expenses-list li h2').first().should('have.text', 'New Book')

    cy.get('.expenses-filter__control select').select(2)
    cy.get('.expenses-list li').should('have.length', 0)
  })
})