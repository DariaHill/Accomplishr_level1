describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/sign-in");
    cy.waitForHydration();
    cy.get("input[type=email]").type("dbabenko+1@devforth.io");
    cy.get("input[type=password]").type("Qwerty1!");
    cy.get(".btn.red.large.rect.fullWidth").click();
  });

  it("Create FSCH instant", () => {
    cy.intercept("/core/user/info*").as("getAccount");
    cy.visit(
      "https://staging.accomplishr.com/profile/simon-klein?subpage=Overview"
    );
    cy.wait("@getAccount").then((interception) => {});
    cy.get(".btn.text.small.btn-white.headerMain__chats__btn").click();
    cy.get(".btn.red.small.rect.fireside-btn").click();
    cy.get(".createPage__form  input[placeholder=Title]").type("Title of FSCH");
    cy.get(".textarea__wrapper").type("text");
    cy.get(".createPage__row .v3ti.inputTags__element.hLarge").click();
    cy.wait(2000);
    cy.get("#dd-item-benefit").click();
    cy.get(".btn.red.small.rect").click();
    cy.get(".card.red.active.createPage__tab").click();
    cy.get(".btn.red.small.rect").click();
    cy.wait(2000);
    cy.get(".card.red.active.createPage__tab").click();
    cy.get(".btn.red.small.rect").click();
    cy.get(".icon.form__uploadBtn__icon").attachFile("image-to-fsch.jpg");
    cy.wait(3000);
    cy.get(".btn.red.small.rect").click();
  });

  /* it.only("Create FSCH schedule", () => {                              не можу знайти селектор для SCEDULE
    cy.intercept("/core/user/info*").as("getAccount");
    cy.visit(
      "https://staging.accomplishr.com/profile/simon-klein?subpage=Overview"
    );
    cy.wait("@getAccount").then((interception) => {});
    cy.get(".btn.text.small.btn-white.headerMain__chats__btn").click();
    cy.get(".btn.red.small.rect.fireside-btn").click();
    cy.get(".createPage__form  input[placeholder=Title]").type("Title of FSCH");
    cy.get(".textarea__wrapper").type("text");
    cy.get(".createPage__row .v3ti.inputTags__element.hLarge").click();
    cy.wait(2000);
    cy.get("#dd-item-benefit").click();
    cy.get(".btn.red.small.rect").click();
    cy.get(".card.red.active.createPage__tab").click();
  }); */
});
