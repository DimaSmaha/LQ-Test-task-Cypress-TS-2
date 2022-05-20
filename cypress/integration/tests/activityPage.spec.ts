import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ActivityPage from '../pageobjects/activity.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Activity test cases',  function()  {
    //Positive testing
    it('Should open recently added defect details',  function()  {
        HomePage.clickActivityButton()
        Common.clickDefectWord()
        Common.defectDetails.should('be.visible')
    })
    it('Should filtrate Activity page',  function()  {
        HomePage.clickActivityButton()
        ActivityPage.clickOnFilterByIssue()
        ActivityPage.onlyIssuesShown.should('be.visible')
    })
}) 