import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ActivityPage from '../pageobjects/activity.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const activityPage = new ActivityPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check recently added defects',  function()  {
        homePage.clickActivityButton()
        common.clickDefectWord()
        common.defectDetailsCheck.should('be.visible')
    })
    it('Check activity filtration',  function()  {
        homePage.clickActivityButton()
        activityPage.clickOnFilterByIssue()
        activityPage.onlyIssuesShownCheck.should('be.visible')
    })
}) 