class RoadmapPage{
    //objects
    get ImplementationVersion(){
        return cy.get('[name="5.1.0"]')
    }
    get DefectCheckbox(){
        return cy.get('[value="1"][name="tracker_ids[]"]')
    }
    get FeatureCheckbox(){
        return cy.get('[value="2"][name="tracker_ids[]"]')
    }
    get PatchCheckbox(){
        return cy.get('[value="3"][name="tracker_ids[]"]')
    }
    get ApplyButton(){
        return cy.get('[class="button-small"]')
    }
    //methods
    clickImplementationVersion(){
        this.ImplementationVersion.click()
    }
    uncheckDefectCheckbox(){
       this.DefectCheckbox.uncheck()
    }
    uncheckFeatureCheckbox(){
        this.FeatureCheckbox.uncheck()
    }
    uncheckPatchCheckbox(){
       this.PatchCheckbox.uncheck()
    }
    clickApplyButton(){
        this.ApplyButton.click()
    }



    //checks
    get roadmapDetails(){
        return cy.get('[class="progress-info"]')
    }
    get roadmapPatchesFiltration(){
        return cy.contains("Patch #")
    }
    
}
export default new RoadmapPage();