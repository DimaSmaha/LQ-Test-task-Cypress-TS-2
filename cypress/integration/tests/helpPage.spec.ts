import HelpPage from '../../pageobjects/help.page'
const helpPage = new HelpPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  helpPage.GoToHomePage()
  })

describe('Help page test cases',  function()  {
    //Positive testing
    it('Should change redmine guide language',  function()  {
      helpPage.clickHelpButton()
      helpPage.clickNavigateToTranslation()
      helpPage.clickTranslateToFrench()
      helpPage.redmineGuideTranslation.should('be.visible')
    })
    it('Should open API guide details',  function()  {
      helpPage.clickHelpButton()
      helpPage.scrollToDeveloperGuide()
      helpPage.clickRedmineRestApi()
      helpPage.clickApiIssuesGuide()
      helpPage.apiDetails.should('be.visible')
      })
}) 