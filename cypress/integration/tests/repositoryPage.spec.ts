import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import RepositoryPage from '../pageobjects/repository.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Repository page test cases',  function()  {
    //Positive testing
    it('Should open repository page',  function()  {
        HomePage.clickRepoButton()
        RepositoryPage.repositoryPage.should('be.visible')
    })
}) 