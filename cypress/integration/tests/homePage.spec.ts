import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Buy redmine book',  function()  {
      cy.scrollTo('bottom')
      homePage.bookImage.should('be.visible')
    })
    
    it('Check list of companies that uses redmine',  function()  {
      cy.scrollTo('bottom')
      homePage.clickCompaniesThatUseRedminePage()
      common.whoUsesRedmine.should('be.visible')
    })
  }) 