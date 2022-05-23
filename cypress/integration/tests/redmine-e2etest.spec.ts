import Common from '../../pageobjects/common.page'
import HomePage from '../../pageobjects/home.page'
import RegisterPage from '../../pageobjects/register.page'
import LoginPage from '../../pageobjects/login.page'
import ProjectsPage from '../../pageobjects/projects.page'
import HelpPage from '../../pageobjects/help.page'
import OverviewPage from '../../pageobjects/overview.page'
import DownloadPage from '../../pageobjects/download.page'
import ActivityPage from '../../pageobjects/activity.page'
import RoadmapPage from '../../pageobjects/roadmap.page'
import IssuesPage from '../../pageobjects/issues.page'
import NewIssuePage from '../../pageobjects/newissue.page'
import NewsPage from '../../pageobjects/news.page'
import ForumsPage from '../../pageobjects/forums.page'
import RepositoryPage from '../../pageobjects/repository.page'
import SearchResultPage from '../../pageobjects/searchresults.page'
import ResourcesPage from '../../pageobjects/resources.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
  Common.GoToPage()
})

describe('All Redmine test cases',  function()  {
  //Positive testing
  xit('Should register new account',  function()  {
    HomePage.clickRegisterButton()
    RegisterPage.fillLogin('someesrsandom')
    RegisterPage.fillPassword('qwerty')
    RegisterPage.fillPasswordConfirmation('qwerty')
    RegisterPage.fillFirstName('somename')
    RegisterPage.fillLastName('somelastname')
    RegisterPage.fillEmail('soeveryrandommail@gmail.com')
    RegisterPage.clickSubmitButton()
    RegisterPage.successfulRegistration.should('be.visible')
  })
  it('Should sing in to the website',  function()  {
    HomePage.clickLoginButton()
    LoginPage.fillUsername('Babalen')
    LoginPage.fillPassword('qwerty')
    LoginPage.clickLoginButton()
    LoginPage.LoggedAsCheck.should('be.visible')
  })
  it('Should recover the password',  function()  {
    HomePage.clickLoginButton()
    LoginPage.lostPasswordRecover('babalen253@cupbest.com')
    LoginPage.successfulRecoverPasswordNoticeCheck.should('be.visible')
  })
  xit('Should download redmine repository',  function()  {
    HomePage.clickRepoVersionButton()
    DownloadPage.downloadRepository()
    DownloadPage.RedmineRepository.should('be.visible')
  })
  it('Should open available project overview',  function()  {
    HomePage.clickProjectsButton()
    ProjectsPage.clickRedmineProjectButton()
    ProjectsPage.redmineProject.should('be.visible')
  })
  it('Should open recently added defect details',  function()  {
    HomePage.clickActivityButton()
    Common.clickDefectWord()
    Common.defectDetails.should('be.visible')
  })
  it('Should open version implementation details',  function()  {
    HomePage.clickRoadmapButton()
    RoadmapPage.clickImplementationVersion()
    RoadmapPage.roadmapDetails.should('be.visible')
  })
  it('Should filtrate Issues page',  function()  {
    HomePage.clickIssuesButton()
    IssuesPage.addTrackerFilter('tracker_id')
    IssuesPage.chooseTrackerFilter('2')
    IssuesPage.clickApplyButton()
    IssuesPage.issuesFeatureFiltration.should('be.visible')
  })
  it('Should add new issue',  function()  {
    HomePage.clickLoginButton()
    LoginPage.logIntoAccount('Babalen','qwerty')
    HomePage.clickNewIssueButton()
    NewIssuePage.makeNewIssue('something bad happened','something very bad happened')
    NewIssuePage.issuePreview.should('be.visible')
  })
  it('Should open news details',  function()  {
    HomePage.clickNewsButton()
    NewsPage.clickAnyNews()
    NewsPage.newsDetails.should('be.visible')
  })
  it('Should open forums topic page',  function()  {
    HomePage.clickForumButton()
    ForumsPage.clickHelpTopic()
    ForumsPage.forumsHelpTopic.should('be.visible')
  })
  it('Should open repository page',  function()  {
    HomePage.clickRepoButton()
    RepositoryPage.repositoryPage.should('be.visible')
  })
  it('Should change redmine guide language',  function()  {
    HomePage.clickHelpButton()
    HelpPage.clickNavigateToTranslation()
    HelpPage.clickTranslateToFrench()
    HelpPage.redmineGuideTranslation.should('be.visible')
  })
  it('Should filtrate search results',  function()  {
    HomePage.useSearchInput('defect{enter}')
    SearchResultPage.clickMessagesFilter()
    SearchResultPage.searchFiltration.should('be.checked')
  })
  it('Should navigate to Redmine book product page',  function()  {
    cy.scrollTo('bottom')
    HomePage.bookImage.should('be.visible')
  })
  it('Should open defect details thorough roadmap page',  function()  {
    HomePage.clickRoadmapButton()
    RoadmapPage.clickImplementationVersion()
    Common.clickDefectWord()
    Common.defectDetails.should('be.visible')
  })
  it('Should increase list of defects shown on Issues page',  function()  {
    HomePage.clickIssuesButton()
    IssuesPage.clickShow50Issues()
    IssuesPage.issuesShow50Issues.should('be.visible')
  })
  it('Should open project administrator page',  function()  {
    HomePage.clickProjectsButton()
    ProjectsPage.clickRedmineProjectButton()
    OverviewPage.clickOnProjectAdministrator()
    OverviewPage.administratorPage.should('be.visible')
  })
  it('Should open Redmine plugin details',  function()  {
    HomePage.clickResourcesPluginsButton()
    ResourcesPage.ClickAnyPlugin()
    ResourcesPage.pluginDetails.should('be.visible')
  })
  it('Should open changelog details by version',  function()  {
    HomePage.clickResourcesChangelogButton()
    ResourcesPage.ClickOnChangelog5series()
    ResourcesPage.changelogDetails.should('be.visible')
  })
  it('Should open security vulnerability details',  function()  {
    HomePage.clickResourcesSecurityButton()
    ResourcesPage.securityVulnerabilityDetails.should('be.visible')
  })
  it('Should open list of companies that uses Redmine',  function()  {
    cy.scrollTo('bottom')
    HomePage.clickCompaniesThatUseRedminePage()
    Common.whoUsesRedmine.should('be.visible')
  })
  it('Should open profile page of user that add news',  function()  {
    HomePage.clickNewsButton()
    NewsPage.clickAnyNews()
    NewsPage.clickUserThatAddNews()
    Common.profileDetailsPage.should('be.visible')
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
  it('Should sort Issues page',  function()  {
    HomePage.clickIssuesButton()
    IssuesPage.clickSortByDate()
    IssuesPage.issuesSorting.should('be.visible')
  })
  it('Should filtrate Roadmap page',  function()  {
    HomePage.clickRoadmapButton()
    RoadmapPage.uncheckDefectCheckbox()
    RoadmapPage.uncheckFeatureCheckbox()
    RoadmapPage.clickApplyButton()
    RoadmapPage.roadmapPatchesFiltration.should('be.visible')
  })
  it('Should filtrate Activity page',  function()  {
    HomePage.clickActivityButton()
    ActivityPage.clickOnFilterByIssue()
    ActivityPage.onlyIssuesShown.should('be.checked')
  })
  it('Should open API guide details',  function()  {
    HomePage.clickHelpButton()
    HelpPage.scrollToDeveloperGuide()
    HelpPage.clickRedmineRestApi()
    Common.clickApiIssuesGuide()
    Common.apiDetails.should('be.visible')
  })
  
  //Negative testing
  it('Should show error, while registering without data',  function()  {
    HomePage.clickRegisterButton()
    RegisterPage.clickSubmitButton()
    RegisterPage.error.should('be.visible')
  })
  it('Should show error, while registering with incorrect email',  function()  {
    HomePage.clickRegisterButton()
    RegisterPage.fillEmail('someenails')
    RegisterPage.clickSubmitButton()
    RegisterPage.error.should('be.visible')
  }) 
})
