import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ForumsPage from '../pageobjects/forums.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const forumsPage = new ForumsPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check forums page',  function()  {
        homePage.clickForumButton()
        forumsPage.clickHelpTopic()
        forumsPage.forumsHelpTopic.should('be.visible')
    })
    it('Check forum topic sorting',  function()  {
        homePage.clickForumButton()
        forumsPage.clickHelpTopic()
        forumsPage.clickSortByDate()
        forumsPage.forumsTopicsSorting.should('be.visible')
    })
    it('Check forum issue details',  function()  {
        homePage.clickForumButton()
        forumsPage.clickHelpTopic()
        forumsPage.clickUserIssue()
        forumsPage.forumTopicsDetails.should('be.visible')
    }) 
        
}) 