describe("template spec", () => {
  before(() => {
    /*  cy.visit("https://staging.accomplishr.com/sign-in"); // Замените URL на ваш
    cy.get(".card .footer .btn-red").click();
    cy.get("input[type=email]").type("dbabenko+1@devforth.io");
    cy.get("input[type=password]").type("Qwerty1!");
    cy.get("div .btn.red.large.rect.fullWidth:first-child").click(); */

    cy.visit("https://staging.accomplishr.com/sign-up"); // Замените URL на ваш
    cy.get(".signup__socials__row .signup__socials__email").click();
    cy.get(
      ".signup__row .input.white.hBig.hover.signup__input div:nth-child(2)"
    ).type("Tina");
    cy.get(
      ".signup__row .input.white.hBig.hover.signup__input div:nth-child(1)"
    ).type("Tatina");
    cy.get("input[type=email]").type("dbabenko+999@devforth.io");
    cy.get("input[type=password]").type("Qwerty1!");
    cy.get(".btn.dark-red.big.rect.fullWidth").click();

    cy.request(
      "https://staging.accomplishr.com/core/auth/internal/email-verification/token"
    ).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(response.body.link);
    });
    cy.wait(2000);
    cy.getCookie("access_token").then((cookies) => {
      cy.writeFile("cypress/fixtures/access_token.json", cookies);
    });
  });

  beforeEach(() => {
    cy.readFile("cypress/fixtures/access_token.json").then((cookies) => {
      cy.setCookie("access_token", cookies.value, { ...cookies });
    });
    cy.getCookie("access_token").should("exist");
  });

  it("passes", () => {
    cy.get(".btn.white-background-color-red.xx-small.semi-sharp").click();
  });

  /*   it("test", () => {
    console.log("test");
  }); */
});
