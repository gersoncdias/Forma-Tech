/// <reference types="cypress" />
const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe("Teste aplicativo demoblaze ", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
    cy.login(user, password);

  });


  it('Login sucesso', () => {
    cy.url().should('include', '/');
  })

  it("começar a compra", () => {
    cy.wait(1000)
    cy.seleciona_item_iphone()
    cy.add_card()
    cy.voltar_pagina()
    cy.seleciona_item_sony_vaio()
    cy.add_card()
    cy.voltar_pagina()
    cy.wait(1000)
    cy.btn_next()
    cy.seleciona_item_asus()
    cy.add_card()
    cy.voltar_pagina()
  });

  it.only("começar a fazer o pedido", () => {
    cy.btn_cart()
    cy.cadastrar_cartao()
  });
});