import Common from '../../pageobjects/common.page'
import HomePage from '../../pageobjects/home.page'
import RoadmapPage from '../../pageobjects/roadmap.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

beforeEach(() => {
    Common.GoToPage()
  })

describe('Roadmap page test cases',  function()  {
    //Positive testing
    it('Should open version implementation details',  function()  {
        HomePage.clickRoadmapButton()
        RoadmapPage.clickImplementationVersion()
        RoadmapPage.roadmapDetails.should('be.visible')
    })
    it('Should open defect details thorough roadmap page',  function()  {
        HomePage.clickRoadmapButton()
        RoadmapPage.clickImplementationVersion()
        Common.clickDefectWord()
        Common.defectDetails.should('be.visible')
    })
    it('Should filtrate Roadmap page',  function()  {
        HomePage.clickRoadmapButton()
        RoadmapPage.uncheckDefectCheckbox()
        RoadmapPage.uncheckFeatureCheckbox()
        RoadmapPage.clickApplyButton()
        RoadmapPage.roadmapPatchesFiltration.should('be.visible')
    })
}) 