import ProjectsPage from '../../pageobjects/projects.page'
const projectsPage = new ProjectsPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    projectsPage.GoToHomePage()
  })

describe('Projects page test cases',  function()  {
    //Positive testing
    it('Should open available project overview',  function()  {
      projectsPage.clickProjectsButton()
      projectsPage.clickRedmineProjectButton()
      projectsPage.redmineProject.should('be.visible')
    })
}) 