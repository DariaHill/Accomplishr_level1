Cypress.Commands.add("waitForHydration", (timeout = 20_000) => {
  cy.get('[data-hydrated="true"', { log: false, timeout });
  cy.get("body").then(($body) => {
    if ($body.find(".card .btn-red").length > 0) {
      cy.get(".card .btn-red").click();
    }
  });
});

import "cypress-file-upload";
