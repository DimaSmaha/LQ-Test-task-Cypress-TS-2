class RepositoryPage{
    
    //objects
    get radioButton(){
        return cy.get('[value="21597"]').eq(0)
    }
    get viewDifferencesButton(){
        return cy.get('[type="submit"]')
    }

    //methods
    clickRadioButton(){
        this.radioButton.click()
    }
    clickViewDifferenceButton(){
        this.viewDifferencesButton.click()
    }

    //checks
    get repositoryPage(){
        return cy.get('[href="/projects/redmine/repository"]')
    }
    get differenceBody(){
        return cy.get('[class="autoscroll"]')
    }
    
}
export default new RepositoryPage();