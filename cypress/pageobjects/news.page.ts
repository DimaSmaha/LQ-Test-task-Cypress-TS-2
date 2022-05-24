import HomePage from "./home.page"

class NewsPage extends HomePage{
    
    //objects
    get anyNews(){
        return cy.contains ('released')
    }
    get userThatAddNews(){
        return cy.get('span [class="user active"]')
    }
    //checks
    get newsDetails(){
        return cy.get('[class="comments"]')
    }
    //methods
    clickAnyNews(){
        this.anyNews.click()
    }
    clickUserThatAddNews(){
        this.userThatAddNews.click()
    }

   
}
export default NewsPage;