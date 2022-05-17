class IssuesPage{
    
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

    //methods
    addTrackerFilter(filter:string){
        this.Filter.select(filter)
    }
    chooseTrackerFilter(filter:string){
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


    //checks
    get issuesFeatureFiltration(){
        return cy.get('[class="tracker"]').contains("Feature")
    }
    get issuesShow50Issues(){
        return cy.contains("1-50")
    }
    get issuesSorting(){
        return cy.contains("2022-05")
    }
}
export default IssuesPage