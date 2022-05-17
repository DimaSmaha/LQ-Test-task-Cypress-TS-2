import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import RegisterPage from '../pageobjects/register.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const regPage = new RegisterPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
  it('Register on website',  function()  {
      homePage.clickRegisterButton()
      regPage.fillLogin('sonnerandom')
      regPage.fillPassword('qwerty')
      regPage.fillPasswordConfirmation('qwerty')
      regPage.fillFirstName('somename')
      regPage.fillLastName('somelastname')
      regPage.fillEmail('soeveryrandommail@gmail.com')
      regPage.clickSubmitButton()
      regPage.successfulRegistration.should('be.visible')
  })
  //Negative testing
  it('Register without data',  function()  {
    homePage.clickRegisterButton()
    regPage.clickSubmitButton()
    regPage.error.should('be.visible')
  })
  it('Register with incorrect email',  function()  {
    homePage.clickRegisterButton()
    regPage.fillEmail('someenails')
    regPage.clickSubmitButton()
    regPage.error.should('be.visible')
  })   
  }) 