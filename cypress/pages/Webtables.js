class webtables{
    weblocators = {
        IIndcolumn : 'tr td:nth-child(2)'

    }
OpenUrl(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
}

IIndcolumn (){
    return cy.get(this.weblocators.IIndcolumn)
}
}
export default webtables