import check from "../pages/Radiobtn&Staticdrp";
import page_indexing from "../fixtures/page_Indexing.json"
const checkobj = new check ()

describe ('Check Box', ()=>{
    it('Check Box', ()=>{
        checkobj.OpenUrl()
        checkobj.checkbox2()
        checkobj.getcheckboxstatus()
        .should('be.checked')
        .and('have.value','option2')
        cy.get('#checkBoxOption2').then(($el) => {
            cy.log($el);
          });

        // Static Dropdwon with Assertions  
        cy.get('select').select('Option3').should('have.value', 'option3')
    })
})