import Pops from "../pages/Pops"
import page_indexing from "../fixtures/page_Indexing.json"
const Popsobj = new Pops ()

describe('Handles Pops', ()=>{
    it('Handles Pops', () =>{
        Popsobj.Openurl()
        Popsobj.Name(page_indexing.Pops.Name)
        Popsobj.Alterbutton()
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello Abhishek, share this practice page and share your knowledge')
        })
        Popsobj.Name(page_indexing.Pops.Name)
        Popsobj.Confirmbutton()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello Abhishek, Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr','target').click()
        // cy.wait(2000); // Wait for 2 seconds
        // cy.url().then((currentUrl) => {
        //     cy.log('https://www.qaclickacademy.com/', currentUrl);
        //   });
          
        // cy.url().should('eq','https://www.qaclickacademy.com/')


    })
})