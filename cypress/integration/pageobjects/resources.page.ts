
class ResourcesPage{

    //objects
    get anyPlugin(){
        return cy.get('a[class="plugin"]').eq(1)
    }
    get changelog5series(){
        return cy.get('[href="/projects/redmine/wiki/Changelog_5_0"]')
    }
    get securityVulnerabilityDetails(){
        return cy.get('[class="external"]').contains('CVE')
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
    return cy.get('[class="info"]')
    }
    get changelogDetails(){
    return cy.get('[class="version"]').eq(0)
    }

}
export default ResourcesPage