/* describe("template spec", () => {
  it("signin", () => {
    cy.visit("https://staging.accomplishr.com/sign-in");
    cy.waitForHydration();
    cy.get("input[type=email]").type("dbabenko+1@devforth.io");
    cy.get("input[type=password]").type("Qwerty1!");
    cy.get(".btn.red.large.rect.fullWidth").click();
  }); */

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/sign-in");
    cy.waitForHydration();
    cy.get("input[type=email]").type("dbabenko+1@devforth.io");
    cy.get("input[type=password]").type("Qwerty1!");
    cy.get(".btn.red.large.rect.fullWidth").click();
  });

  it("comunity", () => {
    cy.get(".acc-icon.icon.acc-icon-support.sidemenuItem__icon").click();
    cy.url().should("include", "https://staging.accomplishr.com/community");
  });

  it("Programs", () => {
    cy.get(".acc-icon.icon.acc-icon-mentorships.sidemenuItem__icon").click();
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
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/settings?subpage=Dispute"
    );
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

  it("See public view", () => {
    cy.get(".btn.white-background-color-red.xx-small.semi-sharp")
      .click()
      .should("contain.text", "Exit Public View");
  });

  it("Overview", () => {
    cy.get(".profileSubPages__tabs.tabs div").contains("Overview").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-k?subpage=Overview"
    );
  });

  it("Programs", () => {
    cy.get(".profileSubPages__tabs.tabs div").contains("Programs").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-k?subpage=Mentorship"
    );
  });

  it("Fireside Chat", () => {
    cy.get(".profileSubPages__tabs.tabs div").contains("Fireside Chat").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-k?subpage=FiresideChat"
    );
  });

  it("Blogs", () => {
    cy.get(".profileSubPages__tabs.tabs div").contains("Blogs").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-k?subpage=Blogs"
    );
  });

  it("Followers", () => {
    cy.get(".name").contains("Followers").click();
    cy.get(".usersList__wrapper .usersList__title").contains("Followers");
  });

  it("Following", () => {
    cy.get(".name").contains("Following").click();
    cy.get(".usersList__wrapper .usersList__title").contains("Following");
  });

  it("Bookmarks", () => {
    cy.get(".profile-header-row-block.profile-other-buttons .dark-red").click();
    cy.url().should("include", "https://staging.accomplishr.com/saved");
  });

  it("Edit- open pop-up", () => {
    cy.get(
      ".btn.transparent-pink.xxx-small.sharper.profile-header-edit-button"
    ).click();
    cy.get(".modalForm__title").should("contain", "Edit Name");
  });

  it.only("Edit First name", () => {
    cy.get(
      ".btn.transparent-pink.xxx-small.sharper.profile-header-edit-button"
    ).click();
    cy.get("input[placeholder=First Name]").type("Lido");
  });
});
