import Mousehover from "../pages/MouseHover";
const Mousehoverobj = new Mousehover ()

describe('Mouse Hover', ()=>{
    it ('Mouse Hover', ()=>{
        Mousehoverobj.OpenUrl()
        Mousehoverobj.Mousehover()
        cy.contains('Top').click({force:true})
        cy.url().should('includes','top')
    })
})