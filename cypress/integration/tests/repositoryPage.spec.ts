import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import RepositoryPage from '../pageobjects/repository.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const repositoryPage = new RepositoryPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check repository page',  function()  {
        homePage.clickRepoButton()
        repositoryPage.repositoryPage.should('be.visible')
    })
}) 