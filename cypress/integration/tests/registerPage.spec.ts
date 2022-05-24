import RegisterPage from '../../pageobjects/register.page'
const registerPage = new RegisterPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    registerPage.GoToHomePage()
  })

describe('Register page test cases',  function()  {
    //Positive testing
  it('Should register new account',  function()  {
    registerPage.clickRegisterButton()
    registerPage.fillLogin('sonnerandom')
    registerPage.fillPassword('qwerty')
    registerPage.fillPasswordConfirmation('qwerty')
    registerPage.fillFirstName('somename')
    registerPage.fillLastName('somelastname')
    registerPage.fillEmail('soeveryrandommail@gmail.com')
    registerPage.clickSubmitButton()
    registerPage.successfulRegistration.should('be.visible')
  })
  //Negative testing
  it('Should show error, while registering without data',  function()  {
    registerPage.clickRegisterButton()
    registerPage.clickSubmitButton()
    registerPage.error.should('be.visible')
  })
  it('Should show error, while registering with incorrect email',  function()  {
    registerPage.clickRegisterButton()
    registerPage.fillEmail('someenails')
    registerPage.clickSubmitButton()
    registerPage.error.should('be.visible')
  })   
  }) 