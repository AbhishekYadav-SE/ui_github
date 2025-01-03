class Mousehover {
    weblocators = {
        Mousehover : '#mousehover',
    }
OpenUrl(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
}
Mousehover (){
    cy.get(this.weblocators.Mousehover).invoke('show')
}
}
export default Mousehover 