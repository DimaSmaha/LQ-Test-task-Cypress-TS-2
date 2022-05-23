class ProjectsPage{
    //objects
    get RedmineProjectButton(){
        return cy.get('[class="project root parent "]')
    }

    //methods
    clickRedmineProjectButton(){
        this.RedmineProjectButton.click()
    }

    //checks
    get redmineProject(){
        return cy.get('[class="issues box"]')
    }
   
}
export default new ProjectsPage();