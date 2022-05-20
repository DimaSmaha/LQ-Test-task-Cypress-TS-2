import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import LoginPage from '..//pageobjects/login.page'
import NewIssuePage from '../pageobjects/newissue.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('New issues page test cases',  function()  {
    //Positive testing
    it('Should add new issue',  function()  {
        HomePage.clickLoginButton()
        LoginPage.logIntoAccount('Babalen','qwerty')
        HomePage.clickNewIssueButton()
        NewIssuePage.makeNewIssue('something bad happened','something very bad happened')
        NewIssuePage.issuePreview.should('be.visible')
      })
}) 