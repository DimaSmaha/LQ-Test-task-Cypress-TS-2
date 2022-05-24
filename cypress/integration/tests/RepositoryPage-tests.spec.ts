import { should } from 'chai'
import Common from '../../pageobjects/common.page'
import homePage from '../../pageobjects/home.page'
import HomePage from '../../pageobjects/home.page'
import RepositoryPage from '../../pageobjects/repository.page'

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
    it('Should open difference between revisions versions',  function()  {
        HomePage.clickRepoButton()
        RepositoryPage.clickRadioButton()
        RepositoryPage.clickViewDifferenceButton()
        RepositoryPage.differenceBody.should('be.visible')
    })
    it('Should find existing repository version',  function()  {
        HomePage.clickRepoButton()
        RepositoryPage.searchRevision('18000{enter}')
        RepositoryPage.revision18000.should('be.visible')
    })
    it('Should open revision list',  function()  {
        HomePage.clickRepoButton()
        RepositoryPage.clickRevisionListButton()
        RepositoryPage.revisionListPagination.should('be.visible')
    })
    it('Should show error, while entering wrong repository version',  function()  {
        HomePage.clickRepoButton()
        RepositoryPage.searchRevision('55555{enter}')
        RepositoryPage.searchError.should('be.visible')
    })

}) 
