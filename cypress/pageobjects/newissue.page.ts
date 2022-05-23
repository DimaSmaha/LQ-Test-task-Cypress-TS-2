class NewIssuePage{
    //objects
    get issueSubject(){
        return cy.get('[id="issue_subject"]')
    }
    get issueDescription(){
        return cy.get('[id="issue_description"]')
    }
    get previewButton(){
        return cy.get('[accesskey="r"]')
    }
    //methods
    fillIssueSubject(subject: string){
        this.issueSubject.type(subject)
    }
    fillIissueDescription(description: string){
        this.issueDescription.type(description)
    }
    clickPreviewButton(){
        this.previewButton.click()
    }
    makeNewIssue(subject:string, description:string){
        this.fillIssueSubject(subject)
        this.fillIissueDescription(description)
        this.clickPreviewButton()
    }

    get issuePreview(){
        return cy.get('[class="preview"]')
    }
    
   
}
export default new NewIssuePage();