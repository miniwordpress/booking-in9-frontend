const baseUrl = Cypress.config().baseUrl

describe("Sign In", () => {
  beforeEach(() => {
    cy.visit(baseUrl + "/signIn")
  })

  it("Show home page when enter correct username and password", () => {
    cy.get("[data-cy=username]").type("11141")
    cy.get("[data-cy=password]").type("00000")
    cy.get("[data-cy=signIn]").click()
    cy.url().should("eq", "http://localhost:3000/")
  })

  // it("Show error message when not enter username and password", () => {
  //   cy.get("[data-cy=signIn]").click()
  //   cy.contains("Username is required").should("be.visible")
  //   cy.contains("Password is required").should("be.visible")
  // })

  // it("Show error message when not enter username", () => {
  //   cy.get('[data-cy="password"]').type("00000{enter}")
  //   cy.contains("Username is required").should("be.visible")
  // })

  // it("Show error message when not enter password", () => {
  //   cy.get('[data-cy="username"]').type("11141")
  //   cy.get("[data-cy=signIn]").click()
  //   cy.contains("Password is required").should("be.visible")
  // })

  // it("Show error message when enter username and password does not exist in EDS Service", () => {
  //   cy.get("[data-cy=username]").type("12345")
  //   cy.get("[data-cy=password]").type("12345{enter}")
  //   cy.contains("User not found.").should("be.visible")
  //   cy.url().should("include", "/sign_in")
  // })

  // it("Show error message when enter username and password does not exist in the system", () => {
  //   cy.get("[data-cy=username]").type("16061")
  //   cy.get("[data-cy=password]").type("00000{enter}")
  //   cy.url().should("include", "/sign_in")
  // })
})