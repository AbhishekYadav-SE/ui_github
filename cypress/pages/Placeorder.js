class Placeorder {
    weblocators = {
        
        Searchbar : 'form input',
        Result : '.product:visible',
        openaddtocart : "img[alt='Cart']",
        processtocheckout : '#root > div > header > div > div.cart > div.cart-preview.active > div.action-block > button',
        Placeanorder : '#root > div > div > div > div > button'
    }

Openurl(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
}

Searchbar (Product){
    cy.get(this.weblocators.Searchbar).click()
    cy.get(this.weblocators.Searchbar).type(Product)
}

Result (){
    return cy.get(this.weblocators.Result)
}

openaddtocart (){
    cy.get(this.weblocators.openaddtocart).click()
}

processtocheckout (){
    cy.get(this.weblocators.processtocheckout).click()
}

Placeanorder (){
    cy.get(this.weblocators.Placeanorder).click()
} 
}

export default Placeorder