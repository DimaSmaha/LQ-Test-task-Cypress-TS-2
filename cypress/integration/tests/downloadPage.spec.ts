import DownloadPage from '../../pageobjects/download.page'
const downloadPage = new DownloadPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    downloadPage.GoToHomePage()
    downloadPage.clickDownloadButton()
  })

describe('Download page test cases',  function()  {
    //Positive testing (Test is not implemented yet)
    it('Should download redmine repository',  function()  {
        downloadPage.RedmineRepository.should('be.visible')
    })
}) 