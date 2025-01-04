import Dyanmicdrp from "../pages/Dynamicdrp";
import page_indexing from "../fixtures/page_Indexing.json"
const Dyanmicdrpobj = new Dyanmicdrp()

describe ('Dyanmic Dropdown', ()=>{
    it ('Dyanmic Dropdown', ()=>{
        Dyanmicdrpobj.Openurl()
        Dyanmicdrpobj.ClickonSearch(page_indexing.Country.country)
        Dyanmicdrpobj.listofcountries()
        .each (($el, index, $list) => {
            if ($el.text()=== 'Zimbabwe')
                $el.click()
        })
        cy.get('#autocomplete').should('have.value','Zimbabwe')
        
        // Here Textbox is visible 
        Dyanmicdrpobj.Textbox()
        .should('be.visible')

        // Here we click hide button
        Dyanmicdrpobj.hidebutton()

        // Verifying that Textbox is not visible after clicking on hide button 
        Dyanmicdrpobj.Textbox()
        .should('not.be.visible')

        Dyanmicdrpobj.showbutton()

        // Here we click Show button
        Dyanmicdrpobj.Textbox()
        .should('be.visible')

    })
})
//