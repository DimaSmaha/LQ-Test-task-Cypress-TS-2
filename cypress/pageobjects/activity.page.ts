import HomePage from "./home.page";

class ActivityPage extends HomePage{
    //objects
    get filterByIssues(){
        return cy.get('[href="/projects/redmine/activity?show_issues=1"]')
    }
    //checks
    get onlyIssuesShown(){
        return cy.get('[checked="checked"][value="1"][name="show_issues"]')
    }
    //methods
    clickOnFilterByIssue(){
        this.filterByIssues.click()
    }

    
}
export default ActivityPage;