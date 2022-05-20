import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ProjectsPage from '../pageobjects/projects.page'
import OverviewPage from '../pageobjects/overview.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Overview page test cases',  function()  {
    //Positive testing
    it('Should open project administrator page',  function()  {
        HomePage.clickProjectsButton()
        ProjectsPage.clickRedmineProjectButton()
        OverviewPage.clickOnProjectAdministrator()
        OverviewPage.administratorPage.should('be.visible')
    })
}) 