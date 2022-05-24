import HomePage from "./home.page";

class SearchResultPage extends HomePage{
    
    //objects
    get MessagesFilter(){
        return cy.get('[href="#"]').contains('Сообщения')
    }
    //checks
    get searchFiltration(){
        return cy.get('[id="messages"][checked="checked"]')
    }
    //objects
    clickMessagesFilter(){
       this.MessagesFilter.click()
    }

}  
export default SearchResultPage;