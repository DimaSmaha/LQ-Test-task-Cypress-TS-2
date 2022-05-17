import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import HelpPage from '../pageobjects/help.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const helpPage = new HelpPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Change Redmine guide language',  function()  {
        homePage.clickHelpButton()
        helpPage.clickNavigateToTranslation()
        helpPage.clickTranslateToFrench()
        helpPage.redmineGuideTranslation.should('be.visible')
    })
    it('Check API guide',  function()  {
        homePage.clickHelpButton()
        helpPage.scrollToDeveloperGuide()
        helpPage.clickRedmineRestApi()
        common.clickApiIssuesGuide()
        common.apiDetails.should('be.visible')
      })
}) 