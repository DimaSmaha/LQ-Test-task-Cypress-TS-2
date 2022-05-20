class ForumsPage{

    //objects
    get HelpTopic(){
        return cy.get('[href="/projects/redmine/boards/2"]')
    }
    get SortByDate(){
        return cy.get('[href="/projects/redmine/boards/2?sort=created_on%2Cupdated_on%3Adesc"]')
    }
    get UserIssue(){
        return cy.get('[href="/boards/2/topics/667"]')
    }

    //methods
    clickHelpTopic(){
       this.HelpTopic.click()
    }
    clickSortByDate(){
        this.SortByDate.click()
     }
    clickUserIssue(){
        this.UserIssue.click()
    }

    //checks
    get forumsHelpTopic(){
        return cy.get('[class="subtitle"]')
    }
    get forumsTopicsSorting(){
        return cy.get('[class="sort asc"]')
    }
    get forumTopicsDetails(){
        return cy.get('[class="message"]')
    }
   
}
export default new ForumsPage();