import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import NewsPage from '../pageobjects/news.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const newsPage = new NewsPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check news page',  function()  {
        homePage.clickNewsButton()
        newsPage.clickAnyNews()
        newsPage.newsDetails.should('be.visible')
    })
    it('Check profile details of user that added news',  function()  {
        homePage.clickNewsButton()
        newsPage.clickAnyNews()
        newsPage.clickUserThatAddNews()
        common.profileDetailsPage.should('be.visible')
    })
}) 