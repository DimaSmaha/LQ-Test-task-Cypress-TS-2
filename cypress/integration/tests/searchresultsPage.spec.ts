import SearchResultPage from '../../pageobjects/searchresults.page'
const searchResultPage = new SearchResultPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    searchResultPage.GoToHomePage()
  })

describe('Search page result test cases',  function()  {
    //Positive testing
    it('Should filtrate search results',  function()  {
        searchResultPage.useSearchInput('defect{enter}')
        searchResultPage.clickMessagesFilter()
        searchResultPage.searchFiltration.should('be.checked')
    })
}) 