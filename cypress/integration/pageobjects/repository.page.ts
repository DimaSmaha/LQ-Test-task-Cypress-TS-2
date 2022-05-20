class RepositoryPage{

    //checks
    get repositoryPage(){
        return cy.get('[href="/projects/redmine/repository"]')
    }
    
}
export default new RepositoryPage();