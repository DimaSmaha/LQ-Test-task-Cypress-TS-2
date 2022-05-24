import NewsPage from '../../pageobjects/news.page'
const newsPage = new NewsPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    newsPage.GoToHomePage()
  })

describe('News page test cases',  function()  {
    //Positive testing
    it('Should open news details',  function()  {
        newsPage.clickNewsButton()
        newsPage.clickAnyNews()
        newsPage.newsDetails.should('be.visible')
    })
    it('Should open profile page of user that add news',  function()  {
        newsPage.clickNewsButton()
        newsPage.clickAnyNews()
        newsPage.clickUserThatAddNews()
        newsPage.profileDetailsPage.should('be.visible')
    })
}) 