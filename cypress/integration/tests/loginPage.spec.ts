import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import LoginPage from '..//pageobjects/login.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const loginPage = new LoginPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
   //Positive testing

    it('Sign in on website',  function()  {
        homePage.clickLoginButton()
        loginPage.fillUsername('Babalen')
        loginPage.fillPassword('qwerty')
        loginPage.clickLogin()
        loginPage.LoggedAsCheck.should('be.visible')
    })

    it('Password recover',  function()  {
        homePage.clickLoginButton()
        loginPage.lostPasswordRecover('babalen253@cupbest.com')
        loginPage.successfulRecoverPasswordNoticeCheck.should('be.visible')
    })
    
  }) 