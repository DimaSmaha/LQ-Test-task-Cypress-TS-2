import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import DownloadPage from '../pageobjects/download.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const downloadPage = new DownloadPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    xit('Download redmine repository',  function()  {
        homePage.clickRepoVersionButton()
        downloadPage.downloadRepository()
        downloadPage.RedmineRepositoryCheck().should('be.visible')
    })
  }) 