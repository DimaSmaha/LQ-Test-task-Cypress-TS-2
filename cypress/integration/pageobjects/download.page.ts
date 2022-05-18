class DownloadPage{
    //tc1
    get repository(){
        return cy.get('[href="/releases/redmine-5.0.0.zip"]')
    }
    
    downloadRepository(){
        this.repository.click()
    }

    //checks
    get RedmineRepository(){
        return cy.get('[href="/releases/redmine-5.0.0.zip"]')
    }
   
}
export default DownloadPage