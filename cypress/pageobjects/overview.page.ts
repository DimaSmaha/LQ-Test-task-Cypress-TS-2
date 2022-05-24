import ProjectsPage from "./projects.page";

class OverviewPage extends ProjectsPage{
    
    //objects
    get ProjectAdministrator(){
        return cy.get('[href="/users/1"]')
    }
    //check
    get administratorPage(){
        return cy.get('[href="/projects/redmine"]')
    }
    //methods
    clickOnProjectAdministrator(){
        this.ProjectAdministrator.click()
    }

}
export default OverviewPage;