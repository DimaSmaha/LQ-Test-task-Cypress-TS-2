import Common from '../../pageobjects/common.page'
import HomePage from '../../pageobjects/home.page'
import HelpPage from '../../pageobjects/help.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Help page test cases',  function()  {
    //Positive testing
    it('Should change redmine guide language',  function()  {
        HomePage.clickHelpButton()
        HelpPage.clickNavigateToTranslation()
        HelpPage.clickTranslateToFrench()
        HelpPage.redmineGuideTranslation.should('be.visible')
    })
    it('Should open API guide details',  function()  {
        HomePage.clickHelpButton()
        HelpPage.scrollToDeveloperGuide()
        HelpPage.clickRedmineRestApi()
        Common.clickApiIssuesGuide()
        Common.apiDetails.should('be.visible')
      })
}) 