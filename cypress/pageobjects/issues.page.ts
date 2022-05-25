import HomePage from "./home.page"

class IssuesPage extends HomePage{
    
    //objects
    get Filter(){
        return cy.get ('[id="add_filter_select"]')
    }
    get TrackerFilter(){
        return cy.get ('[id="values_tracker_id_1"]')
    }
    get ApplyButton(){
        return cy.get ('[class="icon icon-checked"]')
    }
    get Show50Issues(){
        return cy.get ('[href="/projects/redmine/issues?per_page=50"]')
     }
    get SortByDate(){
        return cy.get('[href="/projects/redmine/issues?sort=updated_on%3Adesc%2Cid%3Adesc"]')
    }
    //checks
    get issuesFeatureFiltration(){
        return cy.get('[class="tracker"]').contains("Feature")
    }
    get issuesShow50Issues(){
        return cy.get('[class="items"]').contains("1-50")
    }
    get issuesSorting(){
        return cy.get('[class="sort desc"]')
    }
    //methods
    addTrackerFilter(filter:string){
        this.Filter.select(filter)
    }
    chooseFilter(filter:string){
        this.TrackerFilter.select(filter)
    }
    clickApplyButton(){
        return cy.get ('[class="icon icon-checked"]').click()
    }
    clickShow50Issues(){
        return cy.get ('[href="/projects/redmine/issues?per_page=50"]').click()
     }
    clickSortByDate(){
        return cy.get('[href="/projects/redmine/issues?sort=updated_on%3Adesc%2Cid%3Adesc"]').click()
    }

}
export default IssuesPage;