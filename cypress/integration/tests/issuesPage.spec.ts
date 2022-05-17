import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import IssuesPage from '../pageobjects/issues.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const issuesPage = new IssuesPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check Issues page filtration',  function()  {
        homePage.clickIssuesButton()
        issuesPage.addTrackerFilter('tracker_id')
        issuesPage.chooseTrackerFilter('2')
        issuesPage.clickApplyButton()
        issuesPage.issuesFeatureFiltration.should('be.visible')
    })
    it('Increase number of defects shown',  function()  {
        homePage.clickIssuesButton()
        issuesPage.clickShow50Issues()
        issuesPage.issuesShow50Issues.should('be.visible')
    })
    it('Check issues page sorting',  function()  {
        homePage.clickIssuesButton()
        issuesPage.clickSortByDate()
        issuesPage.issuesSorting.should('be.visible')
      })
}) 