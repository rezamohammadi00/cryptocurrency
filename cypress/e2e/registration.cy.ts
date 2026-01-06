//takeaway: 
// cy.visit() -> visit the url
// cy.get(".css-selector") -> get the element
// cy.get(".css-selector").click() -> click the element
// cy.get(".css-selector").type("value") -> type the value into the element

describe('Registration functionality', () => {
  it('Register a new user', () => {
   cy.visit("https://software.parasoft.com/contact-us/")
   cy.viewport(1920, 1080)
   cy.get('.cky-banner-btn-close > img').click()

   cy.get('[name="email"]').type("test@test.com")
   cy.get('[name="first_name"]').type("Test")
   cy.get('[name="last_name"]').type("Test")
   cy.get('[name="job_title"]').type("Test")
   cy.get('[name="country"]').click()
   cy.get("option[value='United States']").click()
   cy.get('.label').click()
  })
 
})