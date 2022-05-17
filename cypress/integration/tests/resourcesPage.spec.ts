import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ResourcesPage from '../pageobjects/resources.page'


/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const resourcesPage = new ResourcesPage();


beforeEach(() => {
  common.GoToPage()
})

describe('Redmine test cases',  function()  {
  //Positive testing
  it('Сheck redmine plugin details',  function()  {
    homePage.clickResourcesPluginsButton()
    resourcesPage.ClickAnyPlugin()
    resourcesPage.pluginDetails.should('be.visible')
  })
  it('Check Changelog details by version',  function()  {
    homePage.clickResourcesChangelogButton()
    resourcesPage.ClickOnChangelog5series()
    resourcesPage.changelogDetails.should('be.visible')
  })
  it('Сheck security vulnerability details',  function()  {
    homePage.clickResourcesSecurityButton()
    resourcesPage.securityVulnerabilityDetails.should('be.visible')
  })
})
