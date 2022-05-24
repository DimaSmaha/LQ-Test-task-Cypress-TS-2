import DownloadPage from '../../pageobjects/download.page'
const downloadPage = new DownloadPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    downloadPage.GoToHomePage()
  })

describe('Download page test cases',  function()  {
    //Positive testing
    xit('Should download redmine repository',  function()  {
        downloadPage.clickRepoVersionButton()
        downloadPage.downloadRepository()
        downloadPage.RedmineRepository.should('be.visible')
    })
}) 