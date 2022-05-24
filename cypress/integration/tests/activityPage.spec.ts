import ActivityPage from '../../pageobjects/activity.page'
const activityPage = new ActivityPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    activityPage.GoToHomePage()
  })

describe('Activity test cases',  function()  {
    //Positive testing
    it('Should open recently added defect details',  function()  {
        activityPage.clickActivityButton()
        activityPage.clickDefectWord()
        activityPage.defectDetails.should('be.visible')
    })
    it('Should filtrate Activity page',  function()  {
        activityPage.clickActivityButton()
        activityPage.clickOnFilterByIssue()
        activityPage.onlyIssuesShown.should('be.checked')
    })
    it('Should open page in Atom code',  function()  {
        activityPage.clickActivityButton()
        activityPage.AtomButton.should('be.visible')
    })
}) 