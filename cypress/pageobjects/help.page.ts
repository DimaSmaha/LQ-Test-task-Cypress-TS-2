import HomePage from "./home.page"

class HelpPage extends HomePage{
   
    //objects
    get navigateToTranslation(){
        return cy.get('[href="#Translations-of-the-Redmine-guide"]').eq(0)
    }
    get translateToFrench(){
        return cy.get('[href="/projects/redmine/wiki/FrGuide"]')
    }
    get DeveloperGuide(){
        return cy.get('h2 [href="#Developer-guide"]')
    }
    get RedmineRestApi(){
        return cy.get('[href="/projects/redmine/wiki/Rest_api"]')
    }
    //checks
    get redmineGuideTranslation(){
        return cy.get('[class="toc right"]')
    }
    get apiDetails(){
        return cy.get('[class="toc right"]')
    }
    //methods
    clickNavigateToTranslation(){
        this.navigateToTranslation.click()
    }
    clickTranslateToFrench(){
        this.translateToFrench.click()
    }
    scrollToDeveloperGuide(){
        this.DeveloperGuide.scrollIntoView()
    }
    clickRedmineRestApi(){
        this.RedmineRestApi.click()
    }

}
export default HelpPage;