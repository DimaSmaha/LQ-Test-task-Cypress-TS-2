class ActivityPage{
    //objects
    get filterByIssues(){
        return cy.get('[href="/projects/redmine/activity?show_issues=1"]')
    }
    
    //methods
    clickOnFilterByIssue(){
        this.filterByIssues.click()
    }

    //checks
    get onlyIssuesShown(){
        return cy.get('[checked="checked"][value="1"][name="show_issues"]')
    }
    
}
export default new ActivityPage();