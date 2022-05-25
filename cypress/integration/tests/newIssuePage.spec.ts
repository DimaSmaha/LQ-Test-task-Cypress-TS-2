import LoginPage from '../../pageobjects/login.page'
import NewIssuePage from '../../pageobjects/newIssue.page'
const loginPage = new LoginPage();
const newIssuePage = new NewIssuePage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  newIssuePage.GoToHomePage()
  loginPage.logIntoAccount('babalen','qwerty')
  newIssuePage.clickNewIssueButton()
  })

describe('New issues page test cases',  function()  {
    //Positive testing
    it('Should add new issue',  function()  {
      newIssuePage.makeNewIssue('something bad happened','something very bad happened')
      newIssuePage.issuePreview.should('be.visible')
    })
}) 