import Common from '../../pageobjects/common.page'
import HomePage from '../../pageobjects/home.page'
import ProjectsPage from '../../pageobjects/projects.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Projects page test cases',  function()  {
    //Positive testing
    it('Should open available project overview',  function()  {
      HomePage.clickProjectsButton()
      ProjectsPage.clickRedmineProjectButton()
      ProjectsPage.redmineProject.should('be.visible')
    })
}) 