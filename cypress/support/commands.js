// import {
//     faker
//   } from '@faker-js/faker';
//   const nomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`

const loginPage = require('./page_elements/login_page')
const loginPg = new loginPage()
const nome = "Admin"
const pais = "Brasil"
const cidade = "Maranhão"
const cartao = "12345678901234567891"
const mes = "01"
const ano = "2025"

Cypress.Commands.add('login', (user, password) => {


    const login = () => {

        cy.get(loginPg.txt_titulo)
            .should('exist')
            .should('be.visible')
            .should('contains.text', 'PRODUCT STORE')

        cy.get(loginPg.btn_login)
            .should('exist')
            .should('be.visible')
            .click()

        cy.get(loginPg.campo_login)
            .wait(2000)
            .should('exist')
            .should('be.visible')
            .type(user, {
                delay: 100
            })

        cy.get(loginPg.campo_senha)
            .should('exist')
            .should('be.visible')
            .type(password, {
                log: false
            })

        cy.get(loginPg.btn_fazer_login)
            .should('exist')
            .should('be.visible')
            .click()

        cy.get(loginPg.txt_logado)
            .should('exist')
            .should('be.visible')
            .should("have.text", "Welcome admin");
    }

    login()
})

Cypress.Commands.add('seleciona_item_iphone', () => {

    cy.get(loginPg.seleciona_item_iphone)
        .should('exist')
        .should('be.visible')
        .should('contains.text', "Iphone 6 32gb")
        .click()
})

Cypress.Commands.add('seleciona_item_asus', () => {

    cy.get(loginPg.seleciona_item_asus)
        .should('exist')
        .should('be.visible')
        .should('contains.text', "ASUS Full HD")
        .click()
})


Cypress.Commands.add('seleciona_item_sony_vaio', () => {

    cy.get(loginPg.seleciona_item_sony_vaio)
        .should('exist')
        .should('be.visible')
        .should('contains.text', "Sony vaio i5")
        .click()
})
Cypress.Commands.add('add_card', () => {

    cy.get(loginPg.btn_add_card)
        .should('exist')
        .should('be.visible')
        .should('contains.text', "Add to cart")
        .click()
})

Cypress.Commands.add('voltar_pagina', () => {
    cy.go('back');
    cy.go('back');
});


Cypress.Commands.add('btn_next', () => {

    cy.get(loginPg.btn_next)
        .should('exist')
        .should('be.visible')
        .click()
})


Cypress.Commands.add('btn_cart', () => {

    cy.get(loginPg.btn_cart)
        .should('exist')
        .should('be.visible')
        .click()

    cy.get(loginPg.btn_place)
        .should('exist')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('cadastrar_cartao', () => {

    cy.get(loginPg.input_nome)
        .should('exist')
        .should('be.visible')
        .type(nome)

    cy.get(loginPg.input_pais)
        .should('exist')
        .should('be.visible')
        .type(pais)

    cy.get(loginPg.input_cidade)
        .should('exist')
        .should('be.visible')
        .type(cidade)

    cy.get(loginPg.input_catao)
        .should('exist')
        .should('be.visible')
        .type(cartao)

    cy.get(loginPg.input_mes)
        .should('exist')
        .should('be.visible')
        .type(mes)

    cy.get(loginPg.input_ano)
        .should('exist')
        .should('be.visible')
        .type(ano)

    cy.get(loginPg.enviar_ordem)
        .click()

    cy.get(loginPg.alert_fim)


    cy.get(loginPg.confirm)
        .click()


})