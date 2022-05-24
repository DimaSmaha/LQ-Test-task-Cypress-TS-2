class Common {

   //methods
   GoToPage(){
      cy.viewport(1500,660)
      cy.visit('https://www.redmine.org/')
   }
   
   //objects
   get defectWord(){
      return cy.contains('Defect #')
   }
   get ApiIssuesGuide(){
      return cy.get('[class="wiki-page"]').contains("Issues")
   }
   get AtomButton(){
      return cy.get('[class="atom"]')
   }
   get RedmineHomeUpperButton(){
      return cy.get('[class="home"]')
   }
   
   //common methods
   clickDefectWord(){
     this.defectWord.click()
   }
   clickApiIssuesGuide(){
      this.ApiIssuesGuide.click()
   }
   clickAtomButton(){
      this.AtomButton.click()
   }
   clickRedmineHomeUpperButton(){
      this.RedmineHomeUpperButton.click()
   }
   //common checks
   get defectDetails(){
      return cy.get('[class="description"]')
   }
   get profileDetailsPage(){
      return cy.get('[class="splitcontentleft"]')
   }
   get apiDetails(){
      return cy.get('[class="toc right"]')
   }
   get whoUsesRedmine(){
      return cy.get('[src="/attachments/download/7657/logos.png"]')
   }
   get MyAccountDetails(){
      return cy.get('[class="icon icon-passwd"]')
   }
   get MyPageDetails(){
      return cy.get('[id="content"]')
   }
   get AtomCode(){
      return cy.contains('<?xml version="1.0" encoding="UTF-8"?>')
   }
   

 }
            
export default new Common();