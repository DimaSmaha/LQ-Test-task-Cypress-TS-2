import HomePage from "./home.page";

class ProjectsPage extends HomePage{
    //objects
    get RedmineProjectButton(){
        return cy.get('[class="project root parent "]')
    }
    //checks
    get redmineProject(){
        return cy.get('[class="issues box"]')
    }
    //methods
    clickRedmineProjectButton(){
        this.RedmineProjectButton.click()
    }

}
export default ProjectsPage;