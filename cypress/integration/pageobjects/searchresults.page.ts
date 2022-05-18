class SearchResultPage{
    
    //objects
    get MessagesFilter(){
        return cy.get('[href="#"]').contains('Сообщения')
    }
    
    //objects
    clickMessagesFilter(){
       this.MessagesFilter.click()
    }

    //checks
    get searchFiltration(){
        return cy.get('[id="messages"][checked="checked"]')
    }

}  
export default SearchResultPage