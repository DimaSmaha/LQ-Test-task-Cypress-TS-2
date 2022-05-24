import HomePage from "./home.page";

class DownloadPage extends HomePage{
    //objects
    get repository(){
        return cy.get('[href="/releases/redmine-5.0.0.zip"]')
    }
    //checks
    get RedmineRepository(){
        return cy.get('[href="/releases/redmine-5.0.0.zip"]')
    }
   //methods
    downloadRepository(){
        this.repository.click()
    }

}
export default DownloadPage;