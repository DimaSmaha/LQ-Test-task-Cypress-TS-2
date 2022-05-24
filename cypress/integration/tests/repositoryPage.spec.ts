import RepositoryPage from '../../pageobjects/repository.page'
const repositoryPage = new RepositoryPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    repositoryPage.GoToHomePage()
  })

describe('Repository page test cases',  function()  {
    //Positive testing
    it('Should open repository page',  function()  {
        repositoryPage.clickRepoButton()
        repositoryPage.repositoryPage.should('be.visible')
    })
    it('Should open difference between revisions versions',  function()  {
        repositoryPage.clickRepoButton()
        repositoryPage.clickRadioButton()
        repositoryPage.clickViewDifferenceButton()
        repositoryPage.differenceBody.should('be.visible')
    })
    it('Should find existing repository version',  function()  {
        repositoryPage.clickRepoButton()
        repositoryPage.searchRevision('18000{enter}')
        repositoryPage.revision18000.should('be.visible')
    })
    it('Should open revision list',  function()  {
        repositoryPage.clickRepoButton()
        repositoryPage.clickRevisionListButton()
        repositoryPage.revisionListPagination.should('be.visible')
    })
    it('Should show error, while entering wrong repository version',  function()  {
        repositoryPage.clickRepoButton()
        repositoryPage.searchRevision('55555{enter}')
        repositoryPage.searchError.should('be.visible')
    })

}) 
