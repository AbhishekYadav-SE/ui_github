// indexing and click on button 

// import indexing from "../pages/indexing";
// import page_indexing from "../fixtures/page_Indexing.json"
// const indexobj = new indexing ()

// describe ('Indexing', () => {
//     it ('Indexing', () => {
//         indexobj.OpenUrl()
//         indexobj.Searchbar(page_indexing.Product.Searchbar)
//         indexobj.Result()
//         .should('have.length', 4)
//         .eq(1)
//         .contains('ADD TO CART')
//         .click()

//     })
// })


// used #el method vidoe 17

import indexing from "../pages/indexing";
import page_indexing from "../fixtures/page_Indexing.json"
const indexobj = new indexing ()

describe ('Indexing', () => {
    it ('Indexing', () => {
        indexobj.OpenUrl()
        indexobj.Searchbar(page_indexing.Product.Searchbar)
        indexobj.Result()
        .should('have.length', 4)

        .each(($el, index, $list) => {

            const cashews = $el.find('h4.product-name').text()

            if (cashews.includes('Cashews'))
                {
                $el.find('button').click()
                }
        })
        cy.get('.brand').should('have.text','GREENKART')
    })
})
