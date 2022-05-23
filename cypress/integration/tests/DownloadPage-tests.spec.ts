import Common from '../../pageobjects/common.page'
import HomePage from '../../pageobjects/home.page'
import DownloadPage from '../../pageobjects/download.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Download page test cases',  function()  {
    //Positive testing
    xit('Should download redmine repository',  function()  {
        HomePage.clickRepoVersionButton()
        DownloadPage.downloadRepository()
        DownloadPage.RedmineRepository.should('be.visible')
    })
}) 