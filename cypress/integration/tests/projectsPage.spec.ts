import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ProjectsPage from '../pageobjects/projects.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const projectPage = new ProjectsPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check available projects overview',  function()  {
      homePage.clickProjectsButton()
      projectPage.clickRedmineProjectButton()
      projectPage.redmineProject.should('be.visible')
    })
}) 