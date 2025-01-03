class indexing {
    weblocators = {
        Searchbar : 'form input',
        caproducts : '.product',
        Result : '.product:visible'

    }

OpenUrl ()
{
    cy.visit ('https://rahulshettyacademy.com/seleniumPractise/#/')
}

Searchbar (Product){
    cy.get (this.weblocators.Searchbar).click()
    cy.get(this.weblocators.Searchbar).type(Product)
}

Result () {
    return cy.get (this.weblocators.Result)
}



}

export default indexing