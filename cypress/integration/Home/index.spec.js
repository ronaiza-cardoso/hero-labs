/// <reference types="cypress" />

context('<Home />', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('search input should trigger an api call', () => {
    cy.get('input').type('hulk').get('[data-testid="Hulk"]').should('exist')
  })
})
