/// <reference types="cypress" />

describe("Teste aplicativo demoblaze ", () => {
    beforeEach(() => {
      cy.visit("https://demoblaze.com/");
    });
    
  
    it("exibir página de login", () => {
      cy.get("[data-target='#signInModal']").should("have.text", "Sign up");
      cy.get("[data-target='#logInModal']")
        .contains("Log in")
        .click();
      cy.wait(1000);
      cy.get("#loginusername").type("admin", { delay: 100 });
      cy.get("#loginpassword").type("admin", { delay: 100 });
      cy.wait(1000);
      cy.get(".btn.btn-primary")
        .contains("Log in")
        .click();
      cy.get("#nameofuser").should("have.text", "Welcome admin");
      cy.get("#logout2")
        .contains("Log out")
        .click();
      cy.wait(1000);
      cy.get("[data-target='#signInModal']").should("have.text", "Sign up");
    });
  
    it("começar a compra", () => {
      cy.get("[data-target='#logInModal']")
        .contains("Log in")
        .click();
      cy.wait(1000);
      cy.get("#loginusername").type("admin", { delay: 100 });
      cy.get("#loginpassword").type("admin", { delay: 100 });
      cy.wait(1000);
      cy.get(".btn.btn-primary")
        .contains("Log in")
        .click();
      cy.get("#nameofuser").should("have.text", "Welcome admin");
      cy.contains("Nokia lumia 1520").click();
      cy.contains("Add to cart").click();
      cy.go("back");
      cy.go("back");
      cy.contains("Sony vaio i5").click();
      cy.contains("Add to cart").click();
      cy.go("back");
      cy.go("back");
      cy.wait(3000);
      cy.location("pathname").should("eq", "/");
      cy.get("#next2").click();
      cy.contains("ASUS Full HD").click();
      cy.contains("Add to cart").click();
      cy.go("back");
      cy.go("back");
    });
  
    it("começar a fazer o pedido", () => {
      cy.get("[data-target='#logInModal']")
        .contains("Log in")
        .click();
      cy.wait(1000);
      cy.get("#loginusername").type("admin", { delay: 100 });
      cy.get("#loginpassword").type("admin", { delay: 100 });
      cy.wait(1000);
      cy.get(".btn.btn-primary")
        .contains("Log in")
        .click();
      cy.get("#nameofuser").should("have.text", "Welcome admin");
      cy.contains("Cart").click();
      cy.wait(3000);
      cy.get("#tbodyid > tr:nth-child(1) > td:nth-child(4) > a").click();
      cy.wait(3000);
      cy.contains("Place Order").click();
      cy.get("#name").type("Matheus");
      cy.get("#country").type("Brasil");
      cy.get("#city").type("Rio de Janeiro");
      cy.get("#card").type("12345678901234567891");
      cy.get("#month").type("01");
      cy.get("#year").type("2025");
      cy.contains("Purchase").click();
      cy.get("[data-custom-class]")
        .find("h2")
        .should("have.text", "Thank you for your purchase!");
    });
  });