import HomePage from '../../pageobjects/home.page'
import LoginPage from '../../pageobjects/login.page'
const homePage = new HomePage();
const loginPage = new LoginPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  homePage.GoToHomePage()
  })

describe('Home page test cases',  function()  {
    //Positive testing
  it('Should navigate to Redmine book product page',  function()  {
    cy.scrollTo('bottom')
    homePage.bookImage.should('be.visible')
  })
    
  it('Should open list of companies that uses Redmine',  function()  {
    cy.scrollTo('bottom')
    homePage.clickCompaniesThatUseRedminePage()
    homePage.whoUsesRedmine.should('be.visible')
  })
}) 
  
describe('Home page test cases with Log into account precondition',  function()  {
  beforeEach(() => {
    loginPage.logIntoAccount('babalen','qwerty')
  })
  it('Should open your account details',  function()  {
    homePage.clickMyAccountButton()
    homePage.MyAccountDetails.should('be.visible')
  })
  it('Should sign out from account',  function()  {
    homePage.clickSignOutButton()
    homePage.SignInButton.should('be.visible')
  })
  it('Should open your account statistics',  function()  {
    homePage.clickMyPageButton()
    homePage.MyPageDetails.should('be.visible')
  })
})