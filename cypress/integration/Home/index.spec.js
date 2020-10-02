/// <reference types="cypress" />

context('<Home />', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should list 20 heroes', () => {
    cy.get('[data-testid="20"').should('exist')
  })

  it('search input should trigger an api call', () => {
    cy.get('input').type('hulk').get('[alt="Hulk"]').should('exist')
  })

  it('click on favorite button should favorite hero', () => {
    cy.get('[aria-label="Favoritar"]')
      .first()
      .should('have.attr', 'aria-label', 'Favoritar')
      .get('[aria-label="Favoritar"]')
      .first()
      .click()
      .should('have.attr', 'aria-label', 'Favorito')
  })
})
