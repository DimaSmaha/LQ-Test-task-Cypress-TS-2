import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import SearchResultPage from '../pageobjects/searchresults.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const searchresPage = new SearchResultPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check search filtation',  function()  {
        homePage.useSearchInput('defect{enter}')
        searchresPage.clickMessagesFilter()
        searchresPage.searchFiltration.should('be.visible')
    })
}) 