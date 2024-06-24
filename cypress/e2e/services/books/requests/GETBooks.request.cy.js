/// <reference types="cypress" />


function todosLivros() {
    return cy.request({
        method:'GET', 
        url: 'Books',
        failOnStatusCode: false 
    })
}

export {todosLivros};