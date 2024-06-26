describe("Test goal LP", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/blogs");
  });

  it("Find an expert", () => {
    cy.get(
      ".engage.resource__join .btn.dark-grey-border.small.semi-sharp.engage_btn"
    ).click();
    cy.wait(3000);
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/find-an-expert"
    );
  });

  it("Join as an expert", () => {
    cy.get(
      ".engage.resource__join .btn.dark-red.small.semi-sharp.engage_btn"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Enter your email", () => {
    cy.get(".container.w-size-xs.resource-top-container .input-controler").type(
      "dbabenko@devforth.io"
    );
    cy.get(
      ".container.w-size-xs.resource-top-container .btn.dark-red.big.semi-sharp.subscribe-button"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Privacy under search", () => {
    cy.get(
      ".container.w-size-xs.resource-top-container .email-sub-hint"
    ).click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/privacy-policy"
    );
  });

  it("Logo click", () => {
    cy.get(".header.transparent .logo__img").click();
    cy.url("include", "https://staging.accomplishr.com/blogs");
  });

  it("Search", () => {
    cy.get(".container.w-size-xs.resources__wrapper input").type(
      "Learn English"
    );
    cy.get(".f24.h.gray900").should(
      "include.text",
      "Learn English through story: books for all skill levels"
    );
  });
});
