/// <reference types="cypress" />



//the convention
//describe   feature + scenario
//it -> test+Namber + brief description

describe('navigation scenarios', () => {
  it('Test1 - Navigate to the home page', () => {
    cy.visit('/', { timeout: 10000 })



    cy.wait(5000)
    cy.url().should('include', '/')
  })


it('Test2 - Dont navigate to the home page', () => {
    cy.visit('/about')
    cy.wait(5000)
    cy.url().should('eq', 'http://localhost:5173/about')

})

it('Test3 - Go to the about page', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.get('[data-cy="menu-link"]').first().click()
    cy.get('[data-cy="about-link"]').first().click()

    cy.contains('About Cryptocurrency').should('exist')

    cy.url().should('include', '/about')
  })
})