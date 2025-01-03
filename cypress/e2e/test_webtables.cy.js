import webtables from "../pages/Webtables";
const webtablesobj = new webtables ()

describe ('Handles Web Tables', ()=>{
    it('Handeles Web Tables', ()=>{
        webtablesobj.OpenUrl()
        webtablesobj.IIndcolumn()
        .each(($el, index, $list) => {

            const text=$el.text()
            if(text.includes("Python"))
                {
                    cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                    {
                        const pricetext = price.text()
                        expect(pricetext).to.equal('25')
                    })
                }
                
        })
    })
})