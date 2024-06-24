/// <reference types="cypress" />

const PayloadAddLivros = require('../payloads/add-book.json')

function addLivros() {
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: PayloadAddLivros
    })
}

export {addLivros};