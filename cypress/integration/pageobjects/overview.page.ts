class OverviewPage{
    
    //objects
    get ProjectAdministrator(){
        return cy.get('[href="/users/1"]')
    }

    //methods
    clickOnProjectAdministrator(){
        this.ProjectAdministrator.click()
    }

    //check
    get administratorPage(){
        return cy.contains("Administrator")
    }
    
}
export default OverviewPage