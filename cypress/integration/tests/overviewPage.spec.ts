import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ProjectsPage from '../pageobjects/projects.page'
import OverviewPage from '../pageobjects/overview.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const projectPage = new ProjectsPage();
const overviewPage = new OverviewPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check project administarator profile',  function()  {
        homePage.clickProjectsButton()
        projectPage.clickRedmineProjectButton()
        overviewPage.clickOnProjectAdministrator()
        overviewPage.administratorPage.should('be.visible')
    })
}) 