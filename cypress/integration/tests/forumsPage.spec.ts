import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import ForumsPage from '../pageobjects/forums.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Forum page test cases',  function()  {
    //Positive testing
    it('Should open forums topic page',  function()  {
        HomePage.clickForumButton()
        ForumsPage.clickHelpTopic()
        ForumsPage.forumsHelpTopic.should('be.visible')
    })
    it('Should sort forums topic list',  function()  {
        HomePage.clickForumButton()
        ForumsPage.clickHelpTopic()
        ForumsPage.clickSortByDate()
        ForumsPage.forumsTopicsSorting.should('be.visible')
    })
    it('Should open forum issue details',  function()  {
        HomePage.clickForumButton()
        ForumsPage.clickHelpTopic()
        ForumsPage.clickUserIssue()
        ForumsPage.forumTopicsDetails.should('be.visible')
    }) 
        
}) 