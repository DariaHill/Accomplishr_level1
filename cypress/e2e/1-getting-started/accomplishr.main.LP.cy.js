/// <reference types="cypress" />

describe("Test goal LP", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/");
    cy.wait(4000);
    cy.get(".card .btn-red").click();
  });

  it("Selects an option from a custom dropdown", () => {
    cy.get(".content .input-controler").click();
    cy.get(".content .input-controler").type("Academic mentorship");
    cy.get(".dropdown__item:first-child").click();
    cy.get(".searchMentor__container .info__btn").click();
  });

  /*  it("Selects an option from a custom dropdown", () => {
    cy.intercept("/core/area_of_interest*").as("area");
    cy.get(".content .input-wrapper").click();
    cy.wait("@area");

    cy.wait(2000);
    cy.get(".dropdown__item:first-child").click();
    cy.get(
      ".container.w-size-xs.searchMentor__container .btn.dark-red.small.rect.info__btn"
    ).click();
    cy.get(".findPagePromo__description").should("be.visible");
  }); */

  it("Switching pages For members", () => {
    cy.get(".nav__list a:nth-child(1)").click();
    cy.url().should("include", "https://staging.accomplishr.com/for-members");
  });

  it("Switching pages Features", () => {
    cy.get(".nav__list a:nth-child(2)").click();
    cy.url().should("include", "https://staging.accomplishr.com/features");
  });

  it("Switching pages About us", () => {
    cy.get(".nav__list a:nth-child(3)").click();
    cy.url().should("include", "https://staging.accomplishr.com/about");
  });

  it("Switching pages Blogs", () => {
    cy.get(".nav__list a:nth-child(4)").click();
    cy.url().should("include", "https://staging.accomplishr.com/blogs");
  });

  it("Login button in header", () => {
    cy.get(
      ".container.w-size-xs.header__wrapper .nav__buttons a:first-child"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-in");
  });

  it("Sign up button in header", () => {
    cy.get(
      ".container.w-size-xs.header__wrapper .nav__buttons a:nth-child(2)"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Join as an expert button on Goal page LP promo", () => {
    cy.get(".promo__buttons .btn.dark-red.large.semi-sharp.info__btn").click();
    /*  cy.wait(4000);
    cy.url().should("include", "https://staging.accomplishr.com/sign-up"); */
  });

  it("Log in button on Goal page LP promo", () => {
    cy.get(".promo__buttons a:nth-child(2)").click();
  });

  it("Sign up as an expert on Goal page LP", () => {
    cy.get(
      ".section_top.starting .btn.dark-red.large.rect.features__button"
    ).click();
  });

  it("Learn more on Goal page LP", () => {
    cy.get(
      ".engage.wide.mentoring-coaching-engage .btn.dark-grey-border.small.semi-sharp.contacts_btn"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/features");
  });

  it("Get started on Goal page LP", () => {
    cy.get(
      ".engage.wide.mentoring-coaching-engage .btn.dark-red.small.semi-sharp.contacts_btn"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Create account on Goal page LP", () => {
    cy.get(
      ".container.w-size-xs.subblock__container .btn.dark-red.small.semi-sharp"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Start Earning, Effortlessly", () => {
    cy.get(".feature__card:nth-child(1) .btn").click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Choose your rates and set...", () => {
    cy.get(".feature__card:nth-child(2) .btn").click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Share your custom link with your audience", () => {
    cy.get(".feature__card:nth-child(3) .btn").click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Get booked, give advice virtually", () => {
    cy.get(".feature__card:nth-child(4) .btn").click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Become an advisor on Goal page LP", () => {
    cy.get(".open.faq-block .btn.dark-red.big.rect.faq-button").click();
    cy.wait(5000);
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/sign-up?role=MENTOR"
    );
  });

  it("test Unlock your potential Goal page LP", () => {
    cy.get("#spotlight .btn.dark-red.big.semi-sharp.title__button").click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("test Get started in FSCh Goal page LP", () => {
    cy.get(
      ".container.w-size-xs.fireside__wrapper .btn.dark-red.big.semi-sharp.info__btn"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("test Get started inJoin the Thousands FindingGoal page LP", () => {
    cy.get(
      ".engage.wide.join-team .btn.dark-red.small.semi-sharp.join_btn"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/sign-up");
  });

  it("Enter your email input on LP", () => {
    cy.get(".footer input").type("hhy33248@gmail.com");
    cy.get(".email_subscription button").click();
  });

  it("Footer For Experts", () => {
    cy.get(".block.links .footer__links.f16 a").contains("For Experts").click();
    cy.url().should("include", "https://staging.accomplishr.com/");
  });

  it("Footer For Members", () => {
    cy.get(".block.links .footer__links.f16 a").contains("For Members").click();
    cy.url().should("include", "https://staging.accomplishr.com/for-members");
  });

  it("Footer About Us", () => {
    cy.get(".block.links .footer__links.f16 a").contains("About Us").click();
    cy.url().should("include", "https://staging.accomplishr.com/about");
  });

  it("Footer Careers", () => {
    cy.get(".block.links .footer__links.f16 a").contains("Careers").click();
  });

  it("Footer Blog", () => {
    cy.get(".block.links .footer__links.f16 a").contains("Blog").click();
    cy.url().should("include", "https://staging.accomplishr.com/blogs");
  });

  it("Footer Help Center", () => {
    cy.get(".block.links .footer__links.f16 a").contains("Help Center").click();
    cy.url().should("include", "https://staging.accomplishr.com/help");
  });

  it("Footer Terms", () => {
    cy.get(".block.links .footer__links.f16 a").contains("Terms").click();
    cy.url().should("include", "https://staging.accomplishr.com/terms");
  });

  it("Footer Privacy", () => {
    cy.get(".block.links .footer__links.f16 a").contains("Privacy").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/privacy-policy"
    );
  });
});
