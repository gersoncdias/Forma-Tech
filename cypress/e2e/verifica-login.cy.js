/// <reference types="cypress" />

describe("Teste verificação de login demoblaze ", () => {
    beforeEach(() => {
      cy.visit("https://demoblaze.com/");
    });
    
  
    it("verifica mensagem de usuario invalido", () => {
      cy.get("[data-target='#signInModal']").should("have.text", "Sign up");
      cy.get("[data-target='#logInModal']")
        .contains("Log in")
        .click();
        cy.get("#loginusername").type("admin", { delay: 100 });
        cy.get(".btn.btn-primary")
        .contains("Log in")
        .click();
    });

    it("verifica mensagem de senha invalido", () => {
      cy.get("[data-target='#signInModal']").should("have.text", "Sign up");
      cy.get("[data-target='#logInModal']")
        .contains("Log in")
        .click();
        cy.get(".btn.btn-primary")
        .contains("Log in")
        .click();
    });
  });