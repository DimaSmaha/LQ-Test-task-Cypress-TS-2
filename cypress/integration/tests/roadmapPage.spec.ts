import RoadmapPage from '../../pageobjects/roadmap.page'
const roadmapPage = new RoadmapPage();

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    roadmapPage.GoToHomePage()
    roadmapPage.clickRoadmapButton()
  })

describe('Roadmap page test cases',  function()  {
    //Positive testing
    it('Should open version implementation details',  function()  {
        roadmapPage.clickImplementationVersion()
        roadmapPage.roadmapDetails.should('be.visible')
    })
    it('Should open defect details thorough roadmap page',  function()  {
        roadmapPage.clickImplementationVersion()
        roadmapPage.clickDefectWord()
        roadmapPage.defectDetails.should('be.visible')
    })
    it('Should filtrate Roadmap page',  function()  {
        roadmapPage.uncheckDefectCheckbox()
        roadmapPage.uncheckFeatureCheckbox()
        roadmapPage.clickApplyButton()
        roadmapPage.roadmapPatchesFiltration.should('be.visible')
    })
}) 