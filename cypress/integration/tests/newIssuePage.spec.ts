import LoginPage from '../../pageobjects/login.page'
import NewIssuePage from '../../pageobjects/newissue.page'
const loginPage = new LoginPage();
const newIssuePage = new NewIssuePage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  newIssuePage.GoToHomePage()
  })

describe('New issues page test cases',  function()  {
    beforeEach(() => {
    loginPage.logIntoAccount('babalen','qwerty')
    })
    //Positive testing
    it('Should add new issue',  function()  {
      newIssuePage.clickNewIssueButton()
      newIssuePage.makeNewIssue('something bad happened','something very bad happened')
      newIssuePage.issuePreview.should('be.visible')
    })
}) 