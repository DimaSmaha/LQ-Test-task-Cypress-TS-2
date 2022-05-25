import NewsPage from '../../pageobjects/news.page'
const newsPage = new NewsPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    newsPage.GoToHomePage()
    newsPage.clickNewsButton()
  })

describe('News page test cases',  function()  {
    //Positive testing
    it('Should open news details',  function()  {
        newsPage.clickAnyNews()
        newsPage.newsDetails.should('be.visible')
    })
    it('Should open profile page of user that add news',  function()  {
        newsPage.clickAnyNews()
        newsPage.clickUserThatAddNews()
        newsPage.profileDetailsPage.should('be.visible')
    })
}) 