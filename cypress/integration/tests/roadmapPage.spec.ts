import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import RoadmapPage from '../pageobjects/roadmap.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const homePage = new HomePage();
const roadmapPage = new RoadmapPage();

beforeEach(() => {
    common.GoToPage()
  })

describe('Redmine test cases',  function()  {
    //Positive testing
    it('Check Redmine versions implementation',  function()  {
        homePage.clickRoadmapButton()
        roadmapPage.clickImplementationVersion()
        roadmapPage.roadmapDetails.should('be.visible')
    })
    it('Check defect details through roadmap',  function()  {
        homePage.clickRoadmapButton()
        roadmapPage.clickImplementationVersion()
        common.clickDefectWord()
        common.defectDetails.should('be.visible')
    })
    it('Check roadmap filtration',  function()  {
        homePage.clickRoadmapButton()
        roadmapPage.uncheckDefectCheckbox()
        roadmapPage.uncheckFeatureCheckbox()
        roadmapPage.clickApplyButton()
        roadmapPage.roadmapPatchesFiltration.should('be.visible')
    })
}) 