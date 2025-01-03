class Dyanmicdrp{
    weblocators = {
        ClickonSearch : '#autocomplete',
        listofcountries : '.ui-menu-item',
        Textbox : '#displayed-text',
        hidebutton : '#hide-textbox',
        showbutton : '#show-textbox'

    }
Openurl(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
}
ClickonSearch (Country){
    cy.get(this.weblocators.ClickonSearch).click()
    cy.get(this.weblocators.ClickonSearch).type(Country)
}

listofcountries(){
    return cy.get(this.weblocators.listofcountries)
}

Textbox(){
    return cy.get(this.weblocators.Textbox)
}

hidebutton (){
    cy.get(this.weblocators.hidebutton).click()
}

showbutton () {
    cy.get(this.weblocators.showbutton).click()
}
}
export default Dyanmicdrp