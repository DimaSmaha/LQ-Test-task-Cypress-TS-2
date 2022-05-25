import DownloadPage from '../../pageobjects/download.page'
const downloadPage = new DownloadPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    downloadPage.GoToHomePage()
  })

describe('Download page test cases',  function()  {
    //Positive testing (Test is not implemented yet)
    xit('Should download redmine repository',  function()  {
        downloadPage.clickDownloadButton()
        downloadPage.downloadRepository()
        downloadPage.RedmineRepository.should('be.visible')
    })
}) 