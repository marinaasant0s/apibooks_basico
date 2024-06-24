/// <reference types="cypress" />


function deletarLivros(idBook) {
    return cy.request({
        method:'DELETE', 
        url: `Books/${idBook}`,
        failOnStatusCode: false
    })
}

export {deletarLivros};