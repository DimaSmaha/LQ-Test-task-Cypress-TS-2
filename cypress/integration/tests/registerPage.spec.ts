import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import RegisterPage from '../pageobjects/register.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Register page test cases',  function()  {
    //Positive testing
  it('Should register new account',  function()  {
    HomePage.clickRegisterButton()
    RegisterPage.fillLogin('sonnerandom')
    RegisterPage.fillPassword('qwerty')
    RegisterPage.fillPasswordConfirmation('qwerty')
    RegisterPage.fillFirstName('somename')
    RegisterPage.fillLastName('somelastname')
    RegisterPage.fillEmail('soeveryrandommail@gmail.com')
    RegisterPage.clickSubmitButton()
    RegisterPage.successfulRegistration.should('be.visible')
  })
  //Negative testing
  it('Should show error, while registering without data',  function()  {
    HomePage.clickRegisterButton()
    RegisterPage.clickSubmitButton()
    RegisterPage.error.should('be.visible')
  })
  it('Should show error, while registering with incorrect email',  function()  {
    HomePage.clickRegisterButton()
    RegisterPage.fillEmail('someenails')
    RegisterPage.clickSubmitButton()
    RegisterPage.error.should('be.visible')
  })   
  }) 