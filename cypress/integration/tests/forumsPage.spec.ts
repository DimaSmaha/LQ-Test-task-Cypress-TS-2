import ForumsPage from '../../pageobjects/forums.page'
const forumsPage = new ForumsPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    forumsPage.GoToHomePage()
    forumsPage.clickForumButton()
  })

describe('Forum page test cases',  function()  {
    //Positive testing
    it('Should open forums topic page',  function()  {
        forumsPage.clickHelpTopic()
        forumsPage.forumsHelpTopic.should('be.visible')
    })
    it('Should sort forums topic list',  function()  {
        forumsPage.clickHelpTopic()
        forumsPage.clickSortByDate()
        forumsPage.forumsTopicsSorting.should('be.visible')
    })
    it('Should open forum issue details',  function()  {
        forumsPage.clickHelpTopic()
        forumsPage.clickUserIssue()
        forumsPage.forumTopicsDetails.should('be.visible')
    }) 
        
}) 