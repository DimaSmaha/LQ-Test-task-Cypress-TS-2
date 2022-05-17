import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import RegisterPage from '../pageobjects/register.page'
import LoginPage from '..//pageobjects/login.page'
import ProjectsPage from '../pageobjects/projects.page'
import HelpPage from '../pageobjects/help.page'
import OverviewPage from '../pageobjects/overview.page'
import DownloadPage from '../pageobjects/download.page'
import ActivityPage from '../pageobjects/activity.page'
import RoadmapPage from '../pageobjects/roadmap.page'
import IssuesPage from '../pageobjects/issues.page'
import NewIssuePage from '../pageobjects/newissue.page'
import NewsPage from '../pageobjects/news.page'
import ForumsPage from '../pageobjects/forums.page'
import RepositoryPage from '../pageobjects/repository.page'
import SearchResultPage from '../pageobjects/searchresults.page'
import ResourcesPage from '../pageobjects/resources.page'


/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const regPage = new RegisterPage();
const loginPage = new LoginPage();
const projectPage = new ProjectsPage();
const helpPage = new HelpPage();
const overviewPage = new OverviewPage();
const downloadPage = new DownloadPage();
const activityPage = new ActivityPage();
const roadmapPage = new RoadmapPage();
const issuesPage = new IssuesPage();
const newissuePage = new NewIssuePage();
const newsPage = new NewsPage();
const forumsPage = new ForumsPage();
const repositoryPage = new RepositoryPage();
const searchresPage = new SearchResultPage();
const resourcesPage = new ResourcesPage();


beforeEach(() => {
  common.GoToPage()
})

describe('Redmine test cases',  function()  {
  //Positive testing
  xit('Register on website',  function()  {
    homePage.clickRegisterButton()
    regPage.fillLogin('sonnerandom')
    regPage.fillPassword('qwerty')
    regPage.fillPasswordConfirmation('qwerty')
    regPage.fillFirstName('somename')
    regPage.fillLastName('somelastname')
    regPage.fillEmail('soeveryrandommail@gmail.com')
    regPage.clickSubmitButton()
    regPage.successfulRegistration.should('be.visible')
  })
  it('Sign in on website',  function()  {
    homePage.clickLoginButton()
    loginPage.fillUsername('Babalen')
    loginPage.fillPassword('qwerty')
    loginPage.clickLogin()
    loginPage.LoggedAsCheck.should('be.visible')
  })
  it('Password recover',  function()  {
    homePage.clickLoginButton()
    loginPage.lostPasswordRecover('babalen253@cupbest.com')
    loginPage.successfulRecoverPasswordNoticeCheck.should('be.visible')
  })
  xit('Download redmine repository',  function()  {
    homePage.clickRepoVersionButton()
    downloadPage.downloadRepository()
    downloadPage.RedmineRepositoryCheck().should('be.visible')
  })
  it('Check available projects overview',  function()  {
    homePage.clickProjectsButton()
    projectPage.clickRedmineProjectButton()
    projectPage.redmineProject.should('be.visible')
  })
  it('Check recently added defects',  function()  {
    homePage.clickActivityButton()
    common.clickDefectWord()
    common.defectDetailsCheck.should('be.visible')
  })
  it('Check Redmine versions implementation',  function()  {
    homePage.clickRoadmapButton()
    roadmapPage.clickImplementationVersion()
    roadmapPage.roadmapDetails.should('be.visible')
  })
  it('Check Issues page filtration',  function()  {
    homePage.clickIssuesButton()
    issuesPage.addTrackerFilter('tracker_id')
    issuesPage.chooseTrackerFilter('2')
    issuesPage.clickApplyButton()
    issuesPage.issuesFeatureFiltration.should('be.visible')
  })
  it('Add new issue',  function()  {
    homePage.clickLoginButton()
    loginPage.logIntoAccount('Babalen','qwerty')
    homePage.clickNewIssueButton()
    newissuePage.makeNewIssue('something bad happened','something very bad happened')
    newissuePage.issuePreview.should('be.visible')
  })
  it('Check news page',  function()  {
    homePage.clickNewsButton()
    newsPage.clickAnyNews()
    newsPage.newsDetails.should('be.visible')
  })
  it('Check forums page',  function()  {
    homePage.clickForumButton()
    forumsPage.clickHelpTopic()
    forumsPage.forumsHelpTopic.should('be.visible')
  })
  it('Check repository page',  function()  {
    homePage.clickRepoButton()
    repositoryPage.repositoryPage.should('be.visible')
  })
  it('Change Redmine guide language',  function()  {
    homePage.clickHelpButton()
    helpPage.clickNavigateToTranslation()
    helpPage.clickTranslateToFrench()
    helpPage.redmineGuideTranslation.should('be.visible')
  })
  it('Check search filtation',  function()  {
    homePage.useSearchInput('defect{enter}')
    searchresPage.clickMessagesFilter()
    searchresPage.searchFiltration.should('be.visible')
  })
  it('Buy redmine book',  function()  {
    cy.scrollTo('bottom')
    homePage.bookImage.should('be.visible')
  })
  it('Check defect details through roadmap',  function()  {
    homePage.clickRoadmapButton()
    roadmapPage.clickImplementationVersion()
    common.clickDefectWord()
    common.defectDetailsCheck.should('be.visible')
  })
  it('Increase number of defects shown',  function()  {
    homePage.clickIssuesButton()
    issuesPage.clickShow50Issues()
    issuesPage.issuesShow50Issues.should('be.visible')
  })
  it('Check project administarator profile',  function()  {
    homePage.clickProjectsButton()
    projectPage.clickRedmineProjectButton()
    overviewPage.clickOnProjectAdministrator()
    overviewPage.administratorPage.should('be.visible')
  })
  it('Сheck redmine plugin details',  function()  {
    homePage.clickResourcesPluginsButton()
    resourcesPage.ClickAnyPlugin()
    resourcesPage.pluginDetails.should('be.visible')
  })
  it('Check Changelog details by version',  function()  {
    homePage.clickResourcesChangelogButton()
    resourcesPage.ClickOnChangelog5series()
    resourcesPage.changelogDetails.should('be.visible')
  })
  it('Сheck security vulnerability details',  function()  {
    homePage.clickResourcesSecurityButton()
    resourcesPage.securityVulnerabilityDetails.should('be.visible')
  })
  it('Check list of companies that uses redmine',  function()  {
    cy.scrollTo('bottom')
    homePage.clickCompaniesThatUseRedminePage()
    common.whoUsesRedmine.should('be.visible')
  })
  it('Check profile details of user that added news',  function()  {
    homePage.clickNewsButton()
    newsPage.clickAnyNews()
    newsPage.clickUserThatAddNews()
    common.profileDetailsPageCheck.should('be.visible')
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
  it('Check issues page sorting',  function()  {
    homePage.clickIssuesButton()
    issuesPage.clickSortByDate()
    issuesPage.issuesSorting.should('be.visible')
  })
  it('Check roadmap filtration',  function()  {
    homePage.clickRoadmapButton()
    roadmapPage.uncheckDefectCheckbox()
    roadmapPage.uncheckFeatureCheckbox()
    roadmapPage.clickApplyButton()
    roadmapPage.roadmapPatchesFiltration.should('be.visible')
  })
  it('Check activity filtration',  function()  {
    homePage.clickActivityButton()
    activityPage.clickOnFilterByIssue()
    activityPage.onlyIssuesShownCheck.should('be.visible')
  })
  it('Check API guide',  function()  {
    homePage.clickHelpButton()
    helpPage.scrollToDeveloperGuide()
    helpPage.clickRedmineRestApi()
    common.clickApiIssuesGuide()
    common.apiDetails.should('be.visible')
  })
  
  //Negative testing
  it('Register without data',  function()  {
    homePage.clickRegisterButton()
    regPage.clickSubmitButton()
    regPage.error.should('be.visible')
  })
  it('Register with incorrect email',  function()  {
    homePage.clickRegisterButton()
    regPage.fillEmail('someenails')
    regPage.clickSubmitButton()
    regPage.error.should('be.visible')
  }) 
})
