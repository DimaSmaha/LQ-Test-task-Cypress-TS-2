
class ResourcesPage{

    //objects
    get anyPlugin(){
        return cy.contains('Plugin')
    }
    get changelog5series(){
        return cy.get('[href="/projects/redmine/wiki/Changelog_5_0"]')
    }
    get securityVulnerabilityDetails(){
        return cy.contains('CVE')
    }
    
    //methods
    ClickAnyPlugin(){
        this.anyPlugin.click()
    }
    ClickOnChangelog5series(){
        this.changelog5series.click()
    }
   
    //checks
    get pluginDetails(){
    return cy.contains("Code repository")
    }
    get changelogDetails(){
    return cy.contains("Changelog 5.0.x")
    }

}
export default ResourcesPage