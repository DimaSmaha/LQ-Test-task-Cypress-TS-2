import HelpPage from '../../pageobjects/help.page'
const helpPage = new HelpPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  helpPage.GoToHomePage()
  helpPage.clickHelpButton()
  })

describe('Help page test cases',  function()  {
    //Positive testing
    it('Should change redmine guide language',  function()  {
      helpPage.clickNavigateToTranslation()
      helpPage.clickTranslateToFrench()
      helpPage.redmineGuideTranslation.should('be.visible')
    })
    it('Should open API guide details',  function()  {
      helpPage.scrollToDeveloperGuide()
      helpPage.clickRedmineRestApi()
      helpPage.clickApiIssuesGuide()
      helpPage.apiDetails.should('be.visible')
      })
}) 