class HomePage{
    //buttons
    get LoginButton(){
     return cy.get('[class="login"]')
    }
    get ProjectsButton(){
     return cy.get('[class="projects"]')
    }
    get RegisterButton(){
     return cy.get('[class="register"]')
    }
    get RepoVersionButton(){
     return cy.get('[href="/projects/redmine/wiki/Download"]')
    }
    get ActivityButton(){
     return cy.get('[class="activity"]')
    }
    get RoadmapButton(){
     return cy.get('[class="roadmap"]')
    }
    get IssuesButton(){
     return cy.get('[class="issues"]')
    }
    get NewsButton(){
     return cy.get('[class="news"]')
    }
    get ForumButton(){
     return cy.get('[class="boards"]')
    }
    get RepoButton(){
     return cy.get('[class="repository"]')
    }
    get NewIssueButton(){
     return cy.get('[class="new-issue"]')
    }
    get HelpButton(){
     return cy.get('[href="/projects/redmine/wiki/Guide"]').eq(0)
    }
    get ResourcesPluginsButton(){
     return cy.get ('[href="/plugins"]')
    }
    get ResourcesChangelogButton(){
     return cy.get('[class="wiki-page"]').contains("Changelog")
    }
    get ResourcesSecurityButton(){
     return cy.get('[class="wiki-page"]').contains('Security')
    }

    //methods for buttons

    clickLoginButton(){
       this.LoginButton.click()
    }
    clickProjectsButton(){
        this.ProjectsButton.click()
    }
    clickRegisterButton(){
        this.RegisterButton.click()
    }
    clickRepoVersionButton(){
        this.RepoVersionButton.click()
    }
    clickActivityButton(){
        this.ActivityButton.click()
    }
    clickRoadmapButton(){
        this.RoadmapButton.click()
    }
    clickIssuesButton(){
        this.IssuesButton.click()
    }
    clickNewsButton(){
        this.NewsButton.click()
    }
    clickForumButton(){
        this.ForumButton.click()
    }
    clickRepoButton(){
        this.RepoButton.click()
    }
    clickNewIssueButton(){
        this.NewIssueButton.click()
    }
    clickHelpButton(){
        this.HelpButton.click()
    }
    clickResourcesPluginsButton(){
        this.ResourcesPluginsButton.click()
    }
    clickResourcesChangelogButton(){
        this.ResourcesChangelogButton.click()
    }
    clickResourcesSecurityButton(){
        this.ResourcesSecurityButton.click()
    }

    //objects
    get SearchInput(){
        return cy.get('[class="small"]')
    }
    get CompaniesThatUseRedminePage(){
        return cy.get('[class="wiki-page"]').contains("This page lists")
    }

    // methods
    useSearchInput(input:string){
        this.SearchInput.click().type(input)
    }
    clickCompaniesThatUseRedminePage(){
        this.CompaniesThatUseRedminePage.click()
    }

    //checks
    get bookImage(){
        return cy.get ('[src="/attachments/download/14647/redmine_cookbook.png"]')
    }

    

}
export default new HomePage();


