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

  it("Comunity Switching", () => {
    cy.get(".acc-icon.icon.acc-icon-support.sidemenuItem__icon").click();
    cy.url().should("include", "https://staging.accomplishr.com/community");
  });

  it("Programs Switching", () => {
    cy.wait(1000);
    cy.get(".acc-icon.icon.acc-icon-mentorships.sidemenuItem__icon").click();
    cy.url().should("include", "https://staging.accomplishr.com/mentorships");
  });

  it("Analytic Switching", () => {
    cy.get(".acc-icon.icon.acc-icon-analytics.sidemenuItem__icon").click();
    cy.url().should("include", "https://staging.accomplishr.com/analytics");
  });

  it("Calendar Switching", () => {
    cy.get(".acc-icon.icon.acc-icon-calendar.sidemenuItem__icon").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/calendar/calendar"
    );
  });

  it("Settings Switching", () => {
    cy.get(".acc-icon.icon.acc-icon-settings.sidemenuItem__icon").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/settings?subpage=Dispute"
    );
  });

  it("Privacy Policy Switching", () => {
    cy.get(".acc-icon.icon.acc-icon-privacy.sidemenuItem__icon").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/privacy-policy"
    );
  });

  it("Help Switching", () => {
    cy.get(".acc-icon.icon.acc-icon-help.sidemenuItem__icon").click();
    cy.url().should("include", "https://staging.accomplishr.com/help");
  });

  it("See public view", () => {
    cy.get(".btn.white-background-color-red.xx-small.semi-sharp")
      .click()
      .should("contain.text", "Exit Public View");
  });

  it("Overview Subpage", () => {
    cy.get(".profileSubPages__tabs.tabs div").contains("Overview").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-klein?subpage=Overview"
    );
  });

  it("Programs Subpage", () => {
    cy.get(".profileSubPages__tabs.tabs div").contains("Programs").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-klein?subpage=Mentorship"
    );
  });

  it("Fireside Chat Subpage", () => {
    cy.get(".profileSubPages__tabs.tabs div").contains("Fireside Chat").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-klein?subpage=FiresideChat"
    );
  });

  it("Blogs Subpage", () => {
    cy.get(".profileSubPages__tabs.tabs div").contains("Blogs").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-klein?subpage=Blogs"
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

  it("Bookmarks button", () => {
    cy.get(".profile-header-row-block.profile-other-buttons .dark-red").click();
    cy.url().should("include", "https://staging.accomplishr.com/saved");
  });

  it("Copy profile Link button", () => {
    cy.get(
      ".btn.white-background-color-black.xx-small.semi-sharp.copy-button"
    ).click();
    cy.get(".notification__text").should("contain.text", "Copied to Clipboard");
  });

  it("Edit- open pop-up", () => {
    cy.get(
      ".btn.transparent-pink.xxx-small.sharper.profile-header-edit-button"
    ).click();
    cy.get(".modalForm__title").should("contain", "Edit Name");
  });

  it("Edit First and second names", () => {
    cy.get(
      ".btn.transparent-pink.xxx-small.sharper.profile-header-edit-button"
    ).click();
    cy.get("input[autocomplete=given-name]").clear().type("Simon");
    cy.get("input[autocomplete=family-name]").clear().type("Klein");
    cy.get(".btn.red.small.rect").click();
    cy.get(".sidemenuUser.img").should("contain.text", "Simon K.");
  });

  it("Edit-cancel in pop-up", () => {
    cy.wait(2000);
    cy.get(
      ".btn.transparent-pink.xxx-small.sharper.profile-header-edit-button"
    ).click();
    cy.get(".btn.white-border.small.rect").click();
  });

  it("Overview Bio", () => {
    cy.get(
      ".profile-overview-card:nth-child(1) .profile-overview-card-button"
    ).click();
    cy.get(".modalForm__wrapper").should(
      "contain.text",
      "Edit Bio Information"
    );
    cy.get(".textarea__elm").clear().type("bio information");
    cy.get(".btn.red.small.rect").click();
  });

  it("Overview Skills", () => {
    cy.intercept("/core/user/info*").as("getAccount");
    cy.visit(
      "https://staging.accomplishr.com/profile/simon-klein?subpage=Overview"
    );
    cy.wait("@getAccount").then((interception) => {});
    cy.get(
      ".profile-overview-card:nth-child(4) .profile-overview-card-button"
    ).click();
    cy.get(".modalForm__wrapper").should("contain.text", "Edit Skills");
    cy.get(".v3ti.inputTags__element.hBig").click();
    cy.get(".v3ti.inputTags__element.hBig").select(
      "!Trak-it Solutions !Trak-it HR"
    );
  });

  it("Go to FSCH and then to Home", () => {
    cy.get(".btn.text.small.btn-white.headerMain__chats__btn").click();
    cy.should("contain.text", "Fireside Chats");
    cy.get(".btn.text.small.btn-white.noSidemenuLayout__btn").click();
    cy.url().should(
      "include",
      "https://staging.accomplishr.com/profile/simon-klein"
    );
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
  });

  it.only("Create FSCH schedule", () => {
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
  });
});
