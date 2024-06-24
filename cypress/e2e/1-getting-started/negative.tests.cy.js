/// <reference types="cypress" />

describe("Test goal LP", () => {
  it("Selects an option from a custom dropdown", () => {
    cy.visit("https://staging.accomplishr.com/");
    cy.get(".email_subscription .input-controler").type("tilda");
    cy.get(
      ".email_subscription .btn.dark-red.big.semi-sharp.subscribe-button"
    ).click();
    cy.wait(2000);
    cy.get(".email_subscription .errorText").should(
      "have.text",
      "Must be a valid email address"
    );
  });

  it("Selects an option from a custom dropdown", () => {
    cy.visit("https://staging.accomplishr.com/");
    cy.get(".section-search .input-controler").click();
    cy.get(".section-search .input-controler").select(3);
  });
});
