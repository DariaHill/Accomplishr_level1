/// <reference types="cypress" />;

describe("Test goal LP", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/about");
  });

  it("Logo click", () => {
    cy.get(".container.w-size-xs.header__wrapper .logo__img").click();
    cy.url("contain", "https://staging.accomplishr.com/about");
  });

  it("Learn more", () => {
    cy.get(".group-buttons a:first-child").click();
    cy.url().should("include", "https://staging.accomplishr.com/blogs");
  });

  it("Open position", () => {
    cy.get(".group-buttons a:nth-child(2)").click();
  });

  it("View open position", () => {
    cy.get(
      ".engage.wide.join-team.last .btn.dark-red.small.semi-sharp.join_btn"
    ).click();
  });
});
