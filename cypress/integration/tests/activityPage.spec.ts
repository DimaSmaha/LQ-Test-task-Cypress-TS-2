import ActivityPage from '../../pageobjects/activity.page'
const activityPage = new ActivityPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    activityPage.GoToHomePage()
    activityPage.clickActivityButton()
    
  })

describe('Activity test cases',  function()  {
    //Positive testing
    it('Should open recently added defect details',  function()  {
        activityPage.clickDefectWord()
        activityPage.defectDetails.should('be.visible')
    })
    it('Should filtrate Activity page',  function()  {
        activityPage.clickOnFilterByIssue()
        activityPage.onlyIssuesShown.should('be.checked')
    })
    it('Should open page in Atom code',  function()  {
        activityPage.AtomButton.should('be.visible')
    })
}) 