/// <reference types="cypress" />

context('<Home />', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should list 20 heroes', () => {
    cy.get('[data-testid="20"').should('exist')
  })

  it('search input should trigger an api call', () => {
    cy.get('input').type('hulk').get('[data-testid="Hulk"]').should('exist')
  })
})
