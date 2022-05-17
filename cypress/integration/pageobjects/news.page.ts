class NewsPage{
    
    //objects
    get anyNews(){
        return cy.contains ('released')
    }
    get userThatAddNews(){
        return cy.get('span [class="user active"]')
    }

    //methods
    clickAnyNews(){
        this.anyNews.click()
    }
    clickUserThatAddNews(){
        this.userThatAddNews.click()
    }

    //checks
    get newsDetails(){
        return cy.get('[class="comments"]')
    }
    
   
}
export default NewsPage