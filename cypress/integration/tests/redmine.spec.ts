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

const homePage = new HomePage();
const registerPage = new RegisterPage();
const loginPage = new LoginPage();
const projectsPage = new ProjectsPage();
const helpPage = new HelpPage();
const overviewPage = new OverviewPage();
const downloadPage = new DownloadPage();
const activityPage = new ActivityPage();
const roadmapPage = new RoadmapPage();
const issuesPage = new IssuesPage();
const newIssuePage = new NewIssuePage();
const newsPage = new NewsPage();
const forumsPage = new ForumsPage();
const repositoryPage = new RepositoryPage();
const searchResultPage = new SearchResultPage();
const resourcesPage = new ResourcesPage();

beforeEach(() => {
  homePage.GoToHomePage()
})

describe('All Redmine test cases',  function()  {
  //Positive testing
  xit('Should register new account',  function()  {
    registerPage.clickRegisterButton()
    registerPage.fillLogin('someesrsandom')
    registerPage.fillPassword('qwerty')
    registerPage.fillPasswordConfirmation('qwerty')
    registerPage.fillFirstName('somename')
    registerPage.fillLastName('somelastname')
    registerPage.fillEmail('soeveryrandommail@gmail.com')
    registerPage.clickSubmitButton()
    registerPage.successfulRegistration.should('be.visible')
  })
  it('Should sing in to the website',  function()  {
    loginPage.clickSignInButton()
    loginPage.fillUsername('Babalen')
    loginPage.fillPassword('qwerty')
    loginPage.clickLoginButton()
    loginPage.LoggedAsCheck.should('be.visible')
  })
  it('Should recover the password',  function()  {
    loginPage.clickSignInButton()
    loginPage.lostPasswordRecover('babalen253@cupbest.com')
    loginPage.successfulRecoverPasswordNoticeCheck.should('be.visible')
  })
  xit('Should download redmine repository',  function()  {
    downloadPage.clickRepoVersionButton()
    downloadPage.downloadRepository()
    downloadPage.RedmineRepository.should('be.visible')
  })
  it('Should open available project overview',  function()  {
    projectsPage.clickProjectsButton()
    projectsPage.clickRedmineProjectButton()
    projectsPage.redmineProject.should('be.visible')
  })
  it('Should open recently added defect details',  function()  {
    activityPage.clickActivityButton()
    activityPage.clickDefectWord()
    activityPage.defectDetails.should('be.visible')
  })
  it('Should open version implementation details',  function()  {
    roadmapPage.clickRoadmapButton()
    roadmapPage.clickImplementationVersion()
    roadmapPage.roadmapDetails.should('be.visible')
  })
  it('Should filtrate Issues page',  function()  {
    issuesPage.clickIssuesButton()
    issuesPage.addTrackerFilter('tracker_id')
    issuesPage.chooseTrackerFilter('2')
    issuesPage.clickApplyButton()
    issuesPage.issuesFeatureFiltration.should('be.visible')
  })
  //
  it('Should open news details',  function()  {
    newsPage.clickNewsButton()
    newsPage.clickAnyNews()
    newsPage.newsDetails.should('be.visible')
  })
  it('Should open forums topic page',  function()  {
    forumsPage.clickForumButton()
    forumsPage.clickHelpTopic()
    forumsPage.forumsHelpTopic.should('be.visible')
  })
  it('Should open repository page',  function()  {
    repositoryPage.clickRepoButton()
    repositoryPage.repositoryPage.should('be.visible')
  })
  it('Should change redmine guide language',  function()  {
    helpPage.clickHelpButton()
    helpPage.clickNavigateToTranslation()
    helpPage.clickTranslateToFrench()
    helpPage.redmineGuideTranslation.should('be.visible')
  })
  it('Should filtrate search results',  function()  {
    searchResultPage.useSearchInput('defect{enter}')
    searchResultPage.clickMessagesFilter()
    searchResultPage.searchFiltration.should('be.checked')
  })
  it('Should navigate to Redmine book product page',  function()  {
    cy.scrollTo('bottom')
    homePage.bookImage.should('be.visible')
  })
  it('Should open defect details thorough roadmap page',  function()  {
    roadmapPage.clickRoadmapButton()
    roadmapPage.clickImplementationVersion()
    roadmapPage.clickDefectWord()
    roadmapPage.defectDetails.should('be.visible')
  })
  it('Should increase list of defects shown on Issues page',  function()  {
    issuesPage.clickIssuesButton()
    issuesPage.clickShow50Issues()
    issuesPage.issuesShow50Issues.should('be.visible')
  })
  it('Should open project administrator page',  function()  {
    overviewPage.clickProjectsButton()
    overviewPage.clickRedmineProjectButton()
    overviewPage.clickOnProjectAdministrator()
    overviewPage.administratorPage.should('be.visible')
  })
  it('Should open Redmine plugin details',  function()  {
    resourcesPage.clickResourcesPluginsButton()
    resourcesPage.ClickAnyPlugin()
    resourcesPage.pluginDetails.should('be.visible')
  })
  it('Should open changelog details by version',  function()  {
    resourcesPage.clickResourcesChangelogButton()
    resourcesPage.ClickOnChangelog5series()
    resourcesPage.changelogDetails.should('be.visible')
  })
  it('Should open security vulnerability details',  function()  {
    resourcesPage.clickResourcesSecurityButton()
    resourcesPage.securityVulnerabilityDetails.should('be.visible')
  })
  it('Should open list of companies that uses Redmine',  function()  {
    cy.scrollTo('bottom')
    homePage.clickCompaniesThatUseRedminePage()
    homePage.whoUsesRedmine.should('be.visible')
  })
  it('Should open profile page of user that add news',  function()  {
    newsPage.clickNewsButton()
    newsPage.clickAnyNews()
    newsPage.clickUserThatAddNews()
    newsPage.profileDetailsPage.should('be.visible')
  })
  it('Should sort forums topic list',  function()  {
    forumsPage.clickForumButton()
    forumsPage.clickHelpTopic()
    forumsPage.clickSortByDate()
    forumsPage.forumsTopicsSorting.should('be.visible')
  })
  it('Should open forum issue details',  function()  {
    forumsPage.clickForumButton()
    forumsPage.clickHelpTopic()
    forumsPage.clickUserIssue()
    forumsPage.forumTopicsDetails.should('be.visible')
  }) 
  it('Should sort Issues page',  function()  {
    issuesPage.clickIssuesButton()
    issuesPage.clickSortByDate()
    issuesPage.issuesSorting.should('be.visible')
  })
  it('Should filtrate Roadmap page',  function()  {
    roadmapPage.clickRoadmapButton()
    roadmapPage.uncheckDefectCheckbox()
    roadmapPage.uncheckFeatureCheckbox()
    roadmapPage.clickApplyButton()
    roadmapPage.roadmapPatchesFiltration.should('be.visible')
  })
  it('Should filtrate Activity page',  function()  {
    activityPage.clickActivityButton()
    activityPage.clickOnFilterByIssue()
    activityPage.onlyIssuesShown.should('be.checked')
  })
  it('Should open API guide details',  function()  {
    helpPage.clickHelpButton()
    helpPage.scrollToDeveloperGuide()
    helpPage.clickRedmineRestApi()
    helpPage.clickApiIssuesGuide()
    helpPage.apiDetails.should('be.visible')
  })
  it('Should open difference between revisions versions',  function()  {
    repositoryPage.clickRepoButton()
    repositoryPage.clickRadioButton()
    repositoryPage.clickViewDifferenceButton()
    repositoryPage.differenceBody.should('be.visible')
  })
  //
  //
  it('Should find existing repository version',  function()  {
    repositoryPage.clickRepoButton()
    repositoryPage.searchRevision('18000{enter}')
    repositoryPage.revision18000.should('be.visible')
  })
  it('Should open page in Atom code',  function()  {
    activityPage.clickActivityButton()
    activityPage.AtomButton.should('be.visible')
  })
  //
  it('Should navigate to home page through "Home" button on the top',  function()  {
    issuesPage.clickIssuesButton()
    issuesPage.clickRedmineHomeUpperButton()
    issuesPage.bookImage.should('be.visible')
  })
  it('Should open revision list',  function()  {
    repositoryPage.clickRepoButton()
    repositoryPage.clickRevisionListButton()
    repositoryPage.revisionListPagination.should('be.visible')
  })
  
  //Negative testing
  it('Should show error, while registering without data',  function()  {
    registerPage.clickRegisterButton()
    registerPage.clickSubmitButton()
    registerPage.error.should('be.visible')
  })
  it('Should show error, while registering with incorrect email',  function()  {
    registerPage.clickRegisterButton()
    registerPage.fillEmail('someenails')
    registerPage.clickSubmitButton()
    registerPage.error.should('be.visible')
  }) 
  it('Should show error, while entering wrong repository version',  function()  {
    repositoryPage.clickRepoButton()
    repositoryPage.searchRevision('55555{enter}')
    repositoryPage.searchError.should('be.visible')
  })
})

describe('Redmine test cases with Log into account precondition',  function()  {
  beforeEach(() => {
    loginPage.logIntoAccount('babalen','qwerty')
  })
  it('Should add new issue',  function()  {     ///////
    newIssuePage.clickNewIssueButton()
    newIssuePage.makeNewIssue('something bad happened','something very bad happened')
    newIssuePage.issuePreview.should('be.visible')
  })
  it('Should open your account details',  function()  {     /////
    homePage.clickMyAccountButton()
    homePage.MyAccountDetails.should('be.visible')
  })
  it('Should sign out from account',  function()  {       ///////
    homePage.clickSignOutButton()
    homePage.SignInButton.should('be.visible')
  })
  it('Should open your account statistics',  function()  {   ///////
    homePage.clickMyPageButton()
    homePage.MyPageDetails.should('be.visible')
  })

})
