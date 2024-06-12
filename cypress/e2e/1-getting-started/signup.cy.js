/// <reference types="cypress" />

describe("Test goal LP", () => {
  it("Sign up ", () => {
    cy.visit("https://staging.accomplishr.com/sign-in");
    cy.get("input[type=email]").type("dbabenko+1@devforth.io");
    cy.get("input[type=password]").type("Qwerty1!");
    cy.get(".signin__btns").click;
    cy.should("contain", "");
  });
});
