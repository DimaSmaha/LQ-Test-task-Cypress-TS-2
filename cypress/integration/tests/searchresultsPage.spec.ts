import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import SearchResultPage from '../pageobjects/searchresults.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Search page result test cases',  function()  {
    //Positive testing
    it('Should filtrate search results',  function()  {
        HomePage.useSearchInput('defect{enter}')
        SearchResultPage.clickMessagesFilter()
        SearchResultPage.searchFiltration.should('be.visible')
    })
}) 