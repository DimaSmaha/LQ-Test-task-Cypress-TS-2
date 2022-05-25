import IssuesPage from '../../pageobjects/issues.page'
const issuesPage = new IssuesPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    issuesPage.GoToHomePage()
    issuesPage.clickIssuesButton()
  })

describe('Issues page test cases',  function()  {
    //Positive testing
    it('Should filtrate Issues page',  function()  {
        issuesPage.addTrackerFilter('tracker_id')
        issuesPage.chooseFilter('Feature')
        issuesPage.clickApplyButton()
        issuesPage.issuesFeatureFiltration.should('be.visible')
    })
    it('Should increase list of defects shown on Issues page',  function()  {
        issuesPage.clickShow50Issues()
        issuesPage.issuesShow50Issues.should('be.visible')
    })
    it('Should sort Issues page',  function()  {
        issuesPage.clickSortByDate()
        issuesPage.issuesSorting.should('be.visible')
    })
    it('Should navigate to home page through "Home" button on the top',  function()  {
        issuesPage.clickRedmineHomeUpperButton()
        issuesPage.bookImage.should('be.visible')
    })
}) 