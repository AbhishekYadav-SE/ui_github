class Pops{
    weblocators = {
        Alterbutton : '#alertbtn',
        Name : '#name',
        Confirmbutton : '#confirmbtn'
    }

    Openurl(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    }

    Alterbutton (){
        cy.get(this.weblocators.Alterbutton).click()
    }

    Name(Pops){
        cy.get(this.weblocators.Name).click()
        cy.get(this.weblocators.Name).type(Pops)
    }

    Confirmbutton (){
        cy.get(this.weblocators.Confirmbutton).click()
    }



}
export default Pops