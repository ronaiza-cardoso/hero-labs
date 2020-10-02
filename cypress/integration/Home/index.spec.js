/// <reference types="cypress" />

context('<Home />', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.hash() - get the current URL hash', () => {
    cy.hash().should('be.empty')
  })
})
