import Common from '../../pageobjects/common.page'
import HomePage from '../../pageobjects/home.page'
import LoginPage from '../../pageobjects/login.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Login page test cases',  function()  {
   //Positive testing

    it('Should sing in to the website',  function()  {
        HomePage.clickLoginButton()
        LoginPage.fillUsername('Babalen')
        LoginPage.fillPassword('qwerty')
        LoginPage.clickLoginButton()
        LoginPage.LoggedAsCheck.should('be.visible')
    })

    it('Should recover the password',  function()  {
        HomePage.clickLoginButton()
        LoginPage.lostPasswordRecover('babalen253@cupbest.com')
        LoginPage.successfulRecoverPasswordNoticeCheck.should('be.visible')
    })
    
  }) 