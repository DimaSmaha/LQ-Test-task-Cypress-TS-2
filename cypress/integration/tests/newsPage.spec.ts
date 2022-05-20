import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import NewsPage from '../pageobjects/news.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('News page test cases',  function()  {
    //Positive testing
    it('Should open news details',  function()  {
        HomePage.clickNewsButton()
        NewsPage.clickAnyNews()
        NewsPage.newsDetails.should('be.visible')
    })
    it('Should open profile page of user that add news',  function()  {
        HomePage.clickNewsButton()
        NewsPage.clickAnyNews()
        NewsPage.clickUserThatAddNews()
        Common.profileDetailsPage.should('be.visible')
    })
}) 