/// <reference types="cypress" />

describe('GitHub Actions', () => {
  it('Everything must work fine', () => {
    cy.visit('http://localhost:4200')
      .get('[data-cy-container="application"]')
      .find('div.toolbar')
      .should('be.visible')
  })

  it('Must failed', () => {
    cy.visit('http://localhost:4200')
      .get('[data-cy-container="application"]')
      .find('div.toolbar')
      .should('not.be.visible')
  })
})
