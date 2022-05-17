import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import LoginPage from '..//pageobjects/login.page'
import NewIssuePage from '../pageobjects/newissue.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const newissuePage = new NewIssuePage();
const loginPage = new LoginPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Add new issue',  function()  {
        homePage.clickLoginButton()
        loginPage.logIntoAccount('Babalen','qwerty')
        homePage.clickNewIssueButton()
        newissuePage.makeNewIssue('something bad happened','something very bad happened')
        newissuePage.issuePreview.should('be.visible')
      })
}) 