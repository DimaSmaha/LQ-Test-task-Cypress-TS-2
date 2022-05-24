class RepositoryPage{
    
    //objects
    get radioButton(){
        return cy.get('[value="21597"]').eq(0)
    }
    get viewDifferencesButton(){
        return cy.get('[type="submit"]')
    }
    get revisionSearchInput(){
        return cy.get('[id="rev"]')
    }
    get revisionListButton(){
        return cy.get('[href="/projects/redmine/repository/revisions"]')
    }

    //methods
    clickRadioButton(){
        this.radioButton.click()
    }
    clickViewDifferenceButton(){
        this.viewDifferencesButton.click()
    }
    searchRevision(input:string){
        this.revisionSearchInput.click().type(input)
    }
    clickRevisionListButton(){
        this.revisionListButton.click()
    }

    //checks
    get repositoryPage(){
        return cy.get('[href="/projects/redmine/repository"]')
    }
    get differenceBody(){
        return cy.get('[class="autoscroll"]')
    }
    get revision18000(){
        return cy.get('[href="/projects/redmine/repository/revisions/18000"]')
    }
    get revisionListPagination(){
        return cy.get('[class="pagination"]')
    }
    get searchError(){
        return cy.get('[id="errorExplanation"]')
    }
    
}
export default new RepositoryPage();