/// <reference types="cypress" />;

describe("Test goal LP", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/about");
  });

  it.only("Learn more", () => {
    cy.get(".group-buttons a:first-child").click();
    cy.url().should("include", "https://staging.accomplishr.com/blogs");
  });

  it.only("Open position", () => {
    cy.get(".group-buttons a:nth-child(2)").click();
  });

  it.only("View open position", () => {
    cy.get(
      ".engage.wide.join-team.last .btn.dark-red.small.semi-sharp.join_btn"
    ).click();
  });
});
