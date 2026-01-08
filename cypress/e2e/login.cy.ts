//takeaway:(static select box)
// select one or many items from a static select box
//one:
// cy.get(".css-selector-of-select-element").select(index-of-option-element) -example-> cy.get("#id").select(0)
// cy.get(".css-selector-of-select-element").select(value-of-option-element) 
// cy.get(".css-selector-of-select-element").select(text-of-option-element) 
//many:
// cy.get(".css-selector-of-select-element").select([index-of-option-element1,index-of-option-element2])
// cy.get(".css-selector-of-select-element").select([text-of-option-element1, text-of-option-element2]) 
// cy.get(".css-selector-of-select-element").select([value-of-option-element1, value-of-option-element2]) 



describe('Login functionality', () => {
  it('Login the user', () => {
  })
 
})