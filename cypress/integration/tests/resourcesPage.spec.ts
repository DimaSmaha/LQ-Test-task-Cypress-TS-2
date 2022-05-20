import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ResourcesPage from '../pageobjects/resources.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  Common.GoToPage()
  })

describe('Resources page test cases',  function()  {
  //Positive testing
  it('Should open Redmine plugin details',  function()  {
    HomePage.clickResourcesPluginsButton()
    ResourcesPage.ClickAnyPlugin()
    ResourcesPage.pluginDetails.should('be.visible')
  })
  it('Should open changelog details by version',  function()  {
    HomePage.clickResourcesChangelogButton()
    ResourcesPage.ClickOnChangelog5series()
    ResourcesPage.changelogDetails.should('be.visible')
  })
  it('Should open security vulnerability details',  function()  {
    HomePage.clickResourcesSecurityButton()
    ResourcesPage.securityVulnerabilityDetails.should('be.visible')
  })
})
