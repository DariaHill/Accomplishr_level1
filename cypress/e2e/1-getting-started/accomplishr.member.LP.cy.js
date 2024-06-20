/// <reference types="cypress" />

describe("Test member LP", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/for-members");
  });

  it("Get started button on Members page", () => {
    cy.get(".btn.dark-red.big.semi-sharp.fullWidth.nav__button").click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Login button on Members page", () => {
    cy.get(
      ".btn.grey-border.big.semi-sharp.fullWidth.nav__button.nav__button-signin"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-in");
  });

  it("Sign up in red frame on Members page", () => {
    cy.get(".members-hero-wrapper .action-button").click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });
});
