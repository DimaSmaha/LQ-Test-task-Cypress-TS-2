import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Home page test cases',  function()  {
    //Positive testing
    it('Should navigate to Redmine book product page',  function()  {
      cy.scrollTo('bottom')
      HomePage.bookImage.should('be.visible')
    })
    
    it('Should open list of companies that uses Redmine',  function()  {
      cy.scrollTo('bottom')
      HomePage.clickCompaniesThatUseRedminePage()
      Common.whoUsesRedmine.should('be.visible')
    })
  }) 