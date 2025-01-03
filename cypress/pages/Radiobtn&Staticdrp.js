class check {
    webloactors = {
        checkbox2 : '#checkBoxOption2',
        getcheckboxstatus : '#checkBoxOption2'
    }

OpenUrl(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
}

checkbox2(){
    cy.get(this.webloactors.checkbox2).check()
}

getcheckboxstatus (){
    return cy.get(this.webloactors.getcheckboxstatus)
}
}

export default check