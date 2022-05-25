import HomePage from "./home.page";

class DownloadPage extends HomePage{
    //objects
    get RedmineRepository(){
        return cy.contains('redmine-5.0.1.zip')
    }
   //methods
    downloadRepository(){
        this.RedmineRepository.click()
    }

}
export default DownloadPage;