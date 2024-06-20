/// <reference types="cypress" />

describe("Test Features page", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/features");
  });

  it("Login button", () => {
    cy.get(
      ".group-buttons.buttons-left.buttons-col.btns .btn.dark-grey-border.small.semi-sharp.main-engage_btn"
    ).click();
    cy.url().should("contain", "https://staging.accomplishr.com/sign-in");
  });

  it("Get started", () => {
    cy.get(
      ".btn.dark-red.small.semi-sharp.main-engage_btn.with-end-icon"
    ).click();
    cy.url().should("contain", "https://staging.accomplishr.com/sign-up");
  });

  it("Login button on black", () => {
    cy.get(
      ".engage.wide.feedbacks.omit-offset .btn.white-background.small.semi-sharp.engage_btn.login"
    ).click();
    cy.url().should("contain", "https://staging.accomplishr.com/sign-in");
  });

  it("Become a mentor button on black", () => {
    cy.get(
      ".engage.wide.feedbacks.omit-offset .btn.dark-red.small.semi-sharp.engage_btn"
    ).click();
    cy.url().should("contain", "https://staging.accomplishr.com/sign-up");
  });

  it("Is Accomplishr free to use?", () => {
    cy.get(
      ".container.w-size-xs.questions-wrapper .faq-block:nth-child(1)"
    ).click();
    cy.wait(2000);
    cy.contains("Yes. Accomplishr is a platform that is totally free to use,");
  });

  it("How do I search on Accomplishr?", () => {
    cy.get(
      ".container.w-size-xs.questions-wrapper .faq-block:nth-child(2)"
    ).click();
    cy.contains(
      "The Accomplishr Search bar at the top of every page allows you to search for experts"
    );
  });

  it("How does the book 1:1 session work?", () => {
    cy.get(
      ".container.w-size-xs.questions-wrapper .faq-block:nth-child(3)"
    ).click();
    cy.contains(
      "Accomplishr makes it easy to book the most in-demand experts and get 1:1 advice"
    );
  });

  it("Can international users use Accomplishr?", () => {
    cy.get(
      ".container.w-size-xs.questions-wrapper .faq-block:nth-child(4)"
    ).click();
    cy.contains(
      "Yes! People from all over the world will have access to the most in"
    );
  });
});
