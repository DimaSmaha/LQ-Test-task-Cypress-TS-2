import ResourcesPage from '../../pageobjects/resources.page'
const resourcesPage = new ResourcesPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  resourcesPage.GoToHomePage()
  })

describe('Resources page test cases',  function()  {
  //Positive testing
  it('Should open Redmine plugin details',  function()  {
    resourcesPage.clickResourcesPluginsButton()
    resourcesPage.ClickAnyPlugin()
    resourcesPage.pluginDetails.should('be.visible')
  })
  it('Should open changelog details by version',  function()  {
    resourcesPage.clickResourcesChangelogButton()
    resourcesPage.ClickOnChangelog5series()
    resourcesPage.changelogDetails.should('be.visible')
  })
  it('Should open security vulnerability details',  function()  {
    resourcesPage.clickResourcesSecurityButton()
    resourcesPage.securityVulnerabilityDetails.should('be.visible')
  })
})
