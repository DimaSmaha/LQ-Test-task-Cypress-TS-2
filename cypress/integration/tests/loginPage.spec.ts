import LoginPage from '../../pageobjects/login.page'
const loginPage = new LoginPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  loginPage.GoToHomePage()
  })

describe('Login page test cases',  function()  {
   //Positive testing

    it('Should sing in to the website',  function()  {
      loginPage.clickLoginButton()
        loginPage.fillUsername('Babalen')
        loginPage.fillPassword('qwerty')
        loginPage.clickLoginButton()
        loginPage.LoggedAsCheck.should('be.visible')
    })

    it('Should recover the password',  function()  {
        loginPage.clickLoginButton()
        loginPage.lostPasswordRecover('babalen253@cupbest.com')
        loginPage.successfulRecoverPasswordNoticeCheck.should('be.visible')
    })
    
  }) 