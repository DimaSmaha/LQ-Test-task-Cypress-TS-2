import OverviewPage from '../../pageobjects/overview.page'
const overviewPage = new OverviewPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    overviewPage.GoToHomePage()
  })

describe('Overview page test cases',  function()  {
    //Positive testing
    it('Should open project administrator page',  function()  {
        overviewPage.clickProjectsButton()
        overviewPage.clickRedmineProjectButton()
        overviewPage.clickOnProjectAdministrator()
        overviewPage.administratorPage.should('be.visible')
    })
}) 