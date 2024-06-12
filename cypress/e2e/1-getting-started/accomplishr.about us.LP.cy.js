/// <reference types="cypress" />

describe("Test goal LP", () => {
  beforeEach(() => {
    cy.visit("https://staging.accomplishr.com/about");
  });

  it("Input select areas of interests on LP", () => {
    cy.get(".group-buttons a:first-child").click();
    cy.url().should("include", "https://staging.accomplishr.com/resources");
  });

  it("Open position button LP", () => {
    cy.get(".group-buttons a:nth-child(2)")
      .invoke("removeAttr", "target")
      .click();
    cy.url().should(
      "redirect",
      "https://apply.workable.com/accomplishr/?lng=en"
    );
  });

  it("should open a new tab with the correct URL", () => {
    // Перехват вызова window.open
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen");
    });

    // Нажатие на элемент, который должен открыть новую вкладку
    cy.get(".group-buttons a:nth-child(2)").click();

    // Проверка вызова window.open с правильным URL
    cy.get("@windowOpen").should(
      "be.calledWith",
      "https://apply.workable.com/accomplishr/?lng=en"
    );
  });
});
