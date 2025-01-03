import Placeorder from "../pages/Placeorder";
import page_indexing from "../fixtures/page_Indexing.json"
const Placeorderobj = new Placeorder()

describe ('Place An Order', () => {
    it ('Place An Order', ()=> {
        Placeorderobj.Openurl()
        Placeorderobj.Searchbar(page_indexing.Product.Searchbar)
        Placeorderobj.Result()
        .should('have.length', 4)
        .each(($el, index, $list) => {
          const cashews =   $el.find('h4.product-name').text()
          if (cashews.includes('Cashews')){
            $el.find('button').click()
          }
        })
        Placeorderobj.openaddtocart()
        Placeorderobj.processtocheckout()
        Placeorderobj.Placeanorder()
    })
})