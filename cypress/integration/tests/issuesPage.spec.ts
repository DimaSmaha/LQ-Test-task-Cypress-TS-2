import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import IssuesPage from '../pageobjects/issues.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Issues page test cases',  function()  {
    //Positive testing
    it('Should filtrate Issues page',  function()  {
        HomePage.clickIssuesButton()
        IssuesPage.addTrackerFilter('tracker_id')
        IssuesPage.chooseTrackerFilter('2')
        IssuesPage.clickApplyButton()
        IssuesPage.issuesFeatureFiltration.should('be.visible')
    })
    it('Should increase list of defects shown on Issues page',  function()  {
        HomePage.clickIssuesButton()
        IssuesPage.clickShow50Issues()
        IssuesPage.issuesShow50Issues.should('be.visible')
    })
    it('Should sort Issues page',  function()  {
        HomePage.clickIssuesButton()
        IssuesPage.clickSortByDate()
        IssuesPage.issuesSorting.should('be.visible')
      })
}) 