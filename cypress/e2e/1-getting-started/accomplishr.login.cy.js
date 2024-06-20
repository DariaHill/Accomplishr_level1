describe("Test goal LP", () => {});

it("Login", () => {
  beforeEac(() => {
    cy.visit("https://staging.accomplishr.com/sign-in");
    cy.get("input[type=email]").type("dbabenko+1@devforth.io");
    cy.get("input[type=password]").type("Qwerty1!");
    cy.get(".btn.red.large.rect.fullWidth").click();
  });

  it("Comunity", () => {
    cy.get(
      ".router-link-active.router-link-exact-active.sidemenu__item"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/community");
  });

  it("Programs", () => {
    cy.get(
      ".router-link-active.router-link-exact-active.sidemenu__item"
    ).click();
    cy.url().should("include", "https://staging.accomplishr.com/mentorships");
  });

  it("Analytic", () => {
    cy.get(".acc-icon.icon.acc-icon-analytics.sidemenuItem__icon").click();
    cy.url().should("include", "https://staging.accomplishr.com/analytics");
  });

  it("Calendar", () => {
    cy.get(".acc-icon.icon.acc-icon-calendar.sidemenuItem__icon").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/calendar/calendar"
    );
  });

  it("Settings", () => {
    cy.get(".acc-icon.icon.acc-icon-settings.sidemenuItem__icon").click();
    cy.url().should("https://staging.accomplishr.com/settings?subpage=Dispute");
  });

  it("Privacy Policy", () => {
    cy.get(".acc-icon.icon.acc-icon-privacy.sidemenuItem__icon").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/privacy-policy"
    );
  });

  it("Help", () => {
    cy.get(".acc-icon.icon.acc-icon-help.sidemenuItem__icon").click();
    cy.url().should("include", "https://staging.accomplishr.com/help");
  });

  it("View profile icon", () => {
    cy.visit("https://staging.accomplishr.com/community");
    cy.get(".sidemenuUser.img .sidemenuUser__profile").click();
  });

  it("See public view", () => {
    cy.get(".btn.white-background-color-red.xx-small.semi-sharp").click();
  });

  it("", () => {
    cy.get(".profileSubPages__tabs.tabs").filter("div[");
  });
});
