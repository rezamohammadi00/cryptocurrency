//takeaway: 

// cy.get("css-selector").should("have.text","text") ex: <p>text</p>  -> return true ✅
// cy.get("css-selector").should("have.text","text1") ex: <p>text2</p>  -> return false ❌

// cy.get("css-selector").should("have.value","text") ex: <input value="text"/>  -> return true ✅
// cy.get("css-selector").should("have.value","text1") ex: <input value="text2"/>  -> return false ❌

//cy.contains("value") -> result one element  or many elements  -> less important command.

describe('Re-registration functionality', () => {
  it('Re-registration the registred user', () => {
   cy.visit("/")
   cy.get('.ant-dropdown-trigger').click()
   cy.get('a[href="/contact"]').last().click()
   cy.contains("Send message").click()
   cy.get("#message_help > .ant-form-item-explain-error").should("have.text","Please share your message.") // a assertion
  })
 
})