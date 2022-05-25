import RepositoryPage from '../../pageobjects/repository.page'
const repositoryPage = new RepositoryPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    repositoryPage.GoToHomePage()
    repositoryPage.clickRepoButton()
  })

describe('Repository page test cases',  function()  {
    //Positive testing
    it('Should open repository page',  function()  {
        repositoryPage.repositoryPage.should('be.visible')
    })
    it('Should open difference between revisions versions',  function()  {
        repositoryPage.clickRadioButton()
        repositoryPage.clickViewDifferenceButton()
        repositoryPage.differenceBody.should('be.visible')
    })
    it('Should find existing repository version',  function()  {
        repositoryPage.searchRevision('18000{enter}')
        repositoryPage.revision18000.should('be.visible')
    })
    it('Should open revision list',  function()  {
        repositoryPage.clickRevisionListButton()
        repositoryPage.revisionListPagination.should('be.visible')
    })
    it('Should show error, while entering wrong repository version',  function()  {
        repositoryPage.searchRevision('55555{enter}')
        repositoryPage.searchError.should('be.visible')
    })

}) 
